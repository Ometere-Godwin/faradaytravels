import type { ContactSubmission } from "@/lib/contact";
import { listContactSubmissions } from "@/lib/contact-store";

export async function getContactSubmissions(): Promise<{
  data: ContactSubmission[] | null;
  error: string | null;
}> {
  try {
    const data = await listContactSubmissions();
    return { data, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { data: null, error: message };
  }
}
