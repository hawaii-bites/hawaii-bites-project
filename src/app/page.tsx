'use client';

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

  return <div>Redirecting to login...</div>;
}
