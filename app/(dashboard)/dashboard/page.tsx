import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/auth/logout-button";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Welcome {session.user.name}
      </h1>

      <LogoutButton />
    </div>
  );
}