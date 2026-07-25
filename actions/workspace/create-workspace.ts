"use server";

import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/current-user";

export async function createWorkspace(name: string) {
  const user = await getCurrentUser();

  const slug = name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  const workspace = await db.workspace.create({
    data: {
      name,
      slug,
      ownerId: user.id,

      memberships: {
        create: {
          userId: user.id,
          role: "OWNER",
        },
      },
    },
  });

  redirect("/dashboard");
}