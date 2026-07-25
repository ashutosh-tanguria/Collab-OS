import { redirect } from "next/navigation";

import { getSession } from "@/lib/session";
import { db } from "@/lib/db";

export async function getCurrentUser() {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    redirect("/sign-in");
  }

  return user;
}