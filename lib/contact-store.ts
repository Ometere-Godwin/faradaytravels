import { promises as fs } from "fs";
import path from "path";
import type { ContactInput, ContactSubmission } from "@/lib/contact";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contact-submissions.json");

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readAll(): Promise<ContactSubmission[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed as ContactSubmission[];
  } catch {
    return [];
  }
}

export async function listContactSubmissions(): Promise<ContactSubmission[]> {
  const all = await readAll();
  return [...all].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}

export async function addContactSubmission(
  input: ContactInput,
): Promise<ContactSubmission> {
  const all = await readAll();
  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    full_name: input.full_name.trim(),
    email: input.email.trim(),
    phone_number: input.phone_number.trim(),
    message: input.message.trim(),
    created_at: new Date().toISOString(),
  };

  all.push(submission);
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2), "utf-8");
  return submission;
}
