<<<<<<< HEAD
<<<<<<< HEAD
'use client';
=======
// src/app/page.tsx
"use client";  // This tells Next.js this is a client component
>>>>>>> parent of 5d2c8cb (fix the hydration state)

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');  // Redirect to login page
  }, [router]);
=======
"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensure hydration completes before redirecting
  }, []);

  useEffect(() => {
    if (hydrated) {
      router.push('/login'); // Redirect to login page
    }
  }, [hydrated, router]);
>>>>>>> parent of 2942d8f (rename page.tsx to index.tsx)

  return <div>Redirecting to login...</div>;
}
