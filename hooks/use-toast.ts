"use client";

import { useCallback, useSyncExternalStore } from "react";

export type ToastVariant = "default" | "destructive";

export type ToastInput = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastRecord = ToastInput & { id: string };

const TOAST_DURATION_MS = 4500;

let memoryToasts: ToastRecord[] = [];
const listeners = new Set<() => void>();

/** Stable empty snapshot for SSR — must not return a new [] each call (React infinite loop). */
const SERVER_TOAST_SNAPSHOT: ToastRecord[] = [];

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return memoryToasts;
}

function getServerSnapshot() {
  return SERVER_TOAST_SNAPSHOT;
}

function emit() {
  for (const l of listeners) l();
}

function pushToast(input: ToastInput) {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  memoryToasts = [...memoryToasts, { ...input, id }];
  emit();
  window.setTimeout(() => {
    memoryToasts = memoryToasts.filter((t) => t.id !== id);
    emit();
  }, TOAST_DURATION_MS);
}

export function toast(input: ToastInput) {
  pushToast(input);
}

export function useToast() {
  const toasts = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const dismiss = useCallback((id: string) => {
    memoryToasts = memoryToasts.filter((t) => t.id !== id);
    emit();
  }, []);

  return { toast, dismiss, toasts };
}
