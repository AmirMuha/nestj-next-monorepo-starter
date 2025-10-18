"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { Button } from "@repo/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isLogin ? "/api/auth/login" : "/api/auth/register";
    try {
      const response = await axios.post(url, { email, password });
      if (isLogin) {
        setToken(response.data.token);
        router.push("/dashboard");
      } else {
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="mt-4 text-blue-500">
        {isLogin ? "Need an account? Register" : "Have an account? Login"}
      </button>
    </main>
  );
}