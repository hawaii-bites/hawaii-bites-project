'use client';

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#004A32] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manoa Munchies</h1>
        <nav className="space-x-4">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <Link href="/home" className="hover:underline">Home</Link>
<<<<<<< HEAD
=======
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/menu" className="hover:underline">Menu</Link>
>>>>>>> parent of 0fc4def (Update login with a bit of style)
          <Link href="/profile" className="hover:underline">Profile</Link>
<<<<<<< HEAD
          <Link href="/todays-top-picks" className="hover:underline">Today&apos;s Top Picks</Link>
          <Link href="/food-available-now" className="hover:underline">Food&apos;s Available Right Now</Link>
<<<<<<< HEAD
          <Link href="/Admin" className="hover:underline">Admin</Link>
          <Link href="/Vendor" className="hover:underline">Vendor</Link>
=======
>>>>>>> parent of abb972e (feat: Added 'Today's Top Picks' page and updated Navbar link)
=======
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/todays-top-picks" className="hover:underline">Today's Top Picks</Link>
>>>>>>> parent of a2264ac (Update navbar)
=======
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/todays-top-picks" className="hover:underline">Today&apos;s Top Picks</Link>
>>>>>>> parent of 2d5d905 (Add 'Foods Available Right Now' page, update Navbar and Footer, remove all image imports)
=======
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/todays-top-picks" className="hover:underline">Today's Top Picks</Link>
          <Link href="/foods-available-right-now" className="hover:underline">Food's Available Right Now</Link>
>>>>>>> parent of 4c66bdb (update foods available to appear in nav and show webpage)
=======
>>>>>>> parent of c7724fe (Admin and Vendor Page)
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
