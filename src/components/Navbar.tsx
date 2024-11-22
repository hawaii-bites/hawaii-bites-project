'use client';

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#004A32] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hawaii Bites</h1>
        <nav className="space-x-4">
<<<<<<< HEAD
          <Link href="/home" className="hover:underline">Home</Link>
=======
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/menu" className="hover:underline">Menu</Link>
>>>>>>> parent of 0fc4def (Update login with a bit of style)
          <Link href="/profile" className="hover:underline">Profile</Link>
<<<<<<< HEAD
          <Link href="/todays-top-picks" className="hover:underline">Today&apos;s Top Picks</Link>
          <Link href="/food-available-now" className="hover:underline">Food&apos;s Available Right Now</Link>
          <Link href="/Admin" className="hover:underline">Admin</Link>
          <Link href="/Vendor" className="hover:underline">Vendor</Link>
=======
>>>>>>> parent of abb972e (feat: Added 'Today's Top Picks' page and updated Navbar link)
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
