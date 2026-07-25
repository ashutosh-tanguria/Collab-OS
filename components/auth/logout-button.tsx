"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();

    toast.success("Logged out successfully");

    router.push("/sign-in");
    router.refresh();
  }

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
}