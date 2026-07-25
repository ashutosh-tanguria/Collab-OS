"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createWorkspaceSchema,
  type CreateWorkspaceData,
} from "@/lib/validations/workspace";

export function CreateWorkspaceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateWorkspaceData>({
    resolver: zodResolver(createWorkspaceSchema),
  });

  async function onSubmit(data: CreateWorkspaceData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4"
    >
      <div>
        <input
          {...register("name")}
          placeholder="Workspace Name"
          className="w-full rounded-lg border px-4 py-2"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full rounded-lg bg-white px-4 py-2 text-black"
      >
        {isSubmitting ? "Creating..." : "Create Workspace"}
      </button>
    </form>
  );
}