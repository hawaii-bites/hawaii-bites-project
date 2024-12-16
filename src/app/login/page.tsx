"use client"; // This tells Next.js this is a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/services/supabaseClient"; // Adjust this path to match your project structure

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for hardcoded credentials
    if (email === "test@hawaii.edu" && password === "TestPassword123") {
      alert("Login successful with test credentials!");
      router.push("/home"); // Redirect to the home page
      return;
    }

    try {
      // Query the "Users" table for matching email and password
      const { data, error } = await supabase
        .from("Users")
        .select("email, password")
        .eq("email", email)
        .eq("password", password);

      if (error) {
        console.error("Error fetching user data:", error.message);
        alert("An error occurred while validating the credentials.");
        return;
      }

      if (data && data.length > 0) {
        // Login successful
        alert("Login successful!");
        router.push("/home"); // Redirect to the home page
      } else {
        // Login failed
        alert("Invalid email or password.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      {/* Description Box */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full max-w-lg mb-6">
        <h2 className="text-xl font-bold mb-4 text-center text-black">
          About Hawaii Bites
        </h2>
        <p className="text-black text-sm leading-relaxed">
          Hawaii Bites provides a secure and intuitive login portal for
          University of Hawaii students. Access personalized services regarding
          places to dine on campus. For Students and Users input your Email in
          the Username field and Password. For Vendors input the Name of
          Company in the Username field and Password.
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Username
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="name@hawaii.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="Enter your UH password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
