import { authClient } from "@/lib/auth-client";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export async function signUp(data: SignUpData) {
  return authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
  });
}