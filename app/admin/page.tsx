import { AdminDashboard } from "@/components/AdminDashboard";
import { getContactSubmissions } from "@/lib/contact-queries";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data, error } = await getContactSubmissions();

  return (
    <AdminDashboard
      initialSubmissions={data ?? []}
      initialError={error}
    />
  );
}
