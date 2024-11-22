// src/app/login/page.tsx
"use client";  // This tells Next.js this is a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = 'dkb25@hawaii.edu';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of a068d41 (revert update 2)
    const validPassword = 'SpaceCadet88';
=======
    const validPassword = 'MoonWalker769*';
>>>>>>> parent of 1bd9f86 (Save local changes before pulling main)
    const validEmail2 = 'sethi3@hawaii.edu';
    const validPassword2 = 'Sword23';
<<<<<<< HEAD
=======
    const validPassword = 'MoonWalker769*';
>>>>>>> parent of 7381629 (Seth valid user and password)
=======
    const validPassword = 'MoonWalker769*';
>>>>>>> parent of 7381629 (Seth valid user and password)
=======
>>>>>>> parent of a068d41 (revert update 2)

    // Validate email and password
    if ((email === validEmail && password === validPassword) || (email === validEmail2 && password === validPassword2)) {
      alert('Login successful!');
      router.push('/home');
    } else {
      alert('Invalid UH email or password.');
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      {/* Description Box */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full max-w-lg mb-6">
        <h2 className="text-xl font-bold mb-4 text-center text-black">About Hawaii Bites</h2>
        <p className="text-black text-sm leading-relaxed">
          Hawaii Bites provides a secure and intuitive login portal for University of Hawaii students. 
          Access personalized services regarding places to dine on campus. 
          For Students and Users input your Email in the Username field and Password.
          For Vendors input the Name of Company in teh Username field and Password.
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
<<<<<<< HEAD
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
=======
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Manoa Munchies Login</h2>
>>>>>>> parent of 592df9b (changed title to Hawaii Bites)
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">Username</label>
=======
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Manoa Munchies Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">UH Email</label>
>>>>>>> parent of 0fc4def (Update login with a bit of style)
=======
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Hawaii Bites Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">UH Email</label>
>>>>>>> parent of 952b128 (installing react)
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              placeholder="name@hawaii.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your UH password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
