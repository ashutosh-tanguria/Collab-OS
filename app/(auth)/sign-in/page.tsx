"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import {
  signInSchema,
  type SignInFormData,
} from "@/lib/validations/auth";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthField } from "@/components/auth/auth-field";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  async function onSubmit(data: SignInFormData) {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(error.message ?? "Invalid credentials");
      return;
    }

   toast.success("Welcome back!");

router.push("/dashboard");
  }

  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to continue to CollabOS."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <AuthField
          id="email"
          label="Email"
          type="email"
          placeholder="ashu@example.com"
          registration={register("email")}
          error={errors.email?.message}
        />

        <AuthField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          registration={register("password")}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
      </form>
    </AuthCard>
  );
}