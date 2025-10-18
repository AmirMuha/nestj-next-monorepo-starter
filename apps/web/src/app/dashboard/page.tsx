"use client";

import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@repo/ui/button";

export default function Dashboard() {
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);

  const handleLogout = () => {
    setToken(null);
    router.push("/");
  };

  if (!token) {
    return null; // or a loading spinner
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to your Dashboard</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </main>
  );
}