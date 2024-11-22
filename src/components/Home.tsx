<<<<<<< HEAD
<<<<<<< HEAD
'use client';
=======
"use client";
>>>>>>> parent of 8ca7504 (use client update)

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const vendors = [
  { id: "krazy-dogs", name: "Krazy Dogs" },
  { id: "middle-eats", name: "Middle Eats" },
  { id: "olays-thai-lao-express", name: "Olay's Thai Lao Express" },
  { id: "saap-saap-hi", name: "Saap Saap HI" },
  { id: "veggi-dogs", name: "Veggi Dogs" },
  { id: "jamba-juice", name: "Jamba Juice" },
  { id: "brito", name: "B'rito" },
  { id: "ding-tea", name: "Ding Tea" },
  { id: "sama-sama", name: "Sama Sama" },
  { id: "the-bean-counter", name: "The Bean Counter" },
  { id: "lasoon", name: "Lasoon" },
  { id: "holo-holo-grill", name: "HoloHolo Grill" },
  { id: "lnl", name: "L&L Hawaiian Barbecue" },
  { id: "panda-express", name: "Panda Express" },
];

const fuzzyMatch = (input: string, target: string): boolean => {
  const normalizedInput = input.trim().toLowerCase();
  const normalizedTarget = target.trim().toLowerCase();

  if (normalizedTarget.includes(normalizedInput)) return true;

  let mismatches = 0;
  for (let i = 0, j = 0; i < normalizedInput.length && j < normalizedTarget.length; i++, j++) {
    if (normalizedInput[i] !== normalizedTarget[j]) {
      mismatches++;
      if (mismatches > 1) return false;
      i--;
    }
  }
  return mismatches <= 1;
};

const MainContent: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [timeOfDay, setTimeOfDay] = useState<SpecialsKeys>("Breakfast"); // Default value
  const [search, setSearch] = useState<string>("");
=======
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [search, setSearch] = useState("");
>>>>>>> parent of b6d6f91 (fixed the categories to have navbar and footer. Also attempt to give types to specials variable)
  const router = useRouter();

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeOfDay(currentHour < 10 ? "Breakfast" : currentHour < 15 ? "Lunch" : "Dinner");
  }, []);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const vendor = vendors.find((v) => fuzzyMatch(search, v.name));
    if (vendor) {
      router.push(`/vendors/${vendor.id}`);
    } else {
      alert("Vendor not found! Please try again.");
    }
  };

  const categories = ["Healthy", "Vegetarian", "Popular"];

  const handleCategoryClick = (category: string) => {
    router.push(`/categories/${category.toLowerCase()}`);
  };

  const specials = {
    Breakfast: [
      { name: "Acai Bowl", location: "Jamba Juice" },
      { name: "Breakfast Burrito", location: "Campus Center Food Court" },
    ],
    Lunch: [
      { name: "Chicken Katsu", location: "L&L Hawaiian Barbecue" },
      { name: "Falafel", location: "Middle Eats" },
    ],
    Dinner: [
      { name: "Grilled Salmon", location: "Gateway Café" },
      { name: "Loco Moco", location: "Hale Aloha Café" },
    ],
  };

  const dailySpecials = [
    { name: "Chili Cheese Dog", location: "Krazy Dogs", deal: "10% off today!" },
    { name: "Lao Fried Chicken Plate", location: "Saap Saap HI", deal: "Limited time only!" },
  ];

  const popularChoices = [
    { name: "Teriyaki Chicken Bowl", location: "Campus Center" },
    { name: "Vegetarian Sushi", location: "Manoa Gardens" },
    { name: "BBQ Pork Sandwich", location: "Food Truck Row" },
  ];

  return (
    <main className="flex-grow container mx-auto py-16 px-8 bg-[#f0fdf4] font-poppins">
      {/* Welcome Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#065f46] mb-6">Welcome to Hawaii Bites!</h1>
        <p className="text-xl text-gray-700 mb-10">
=======
    return (
      <main className="flex-grow container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Manoa Munchies!</h2>
        <p className="text-lg mb-6">
>>>>>>> parent of 592df9b (changed title to Hawaii Bites)
=======
const MainContent: React.FC = () => {
    return (
      <main className="flex-grow container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Hawaii Bites!</h2>
        <p className="text-lg mb-6">
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
          Discover your favorite campus meals and check out what’s available today.
        </p>
  
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for meals, cuisines, or vendors..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
  
        {/* Popular Choices Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-4">Popular Choices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Teriyaki Chicken Bowl</h4>
              <p className="text-gray-600">A popular choice from Campus Center.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Vegetarian Sushi</h4>
              <p className="text-gray-600">Fresh, healthy, and delicious.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">BBQ Pork Sandwich</h4>
              <p className="text-gray-600">A student favorite from Manoa Gardens.</p>
            </div>
          </div>
        </section>
  
        {/* Food Categories Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-4">Explore by Category</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Vegetarian
            </button>
<<<<<<< HEAD
          ))}
        </div>
      </section>

      {/* Time-Based Meals Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-[#065f46] mb-8">{`${timeOfDay} Specials`}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specials[timeOfDay]?.map((special, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#065f46] mb-2">{special.name}</h3>
              <p className="text-gray-600">Available at {special.location}</p>
=======
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Chinese
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Vegan
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              On-the-Go
            </button>
            <button className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-lg hover:bg-green-300">
              Desserts
            </button>
          </div>
        </section>
  
        {/* Daily Highlights or Deals */}
        <section>
          <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-4">Today&apos;s Specials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Spicy Tuna Bowl</h4>
              <p className="text-gray-700">Available today at Paradise Palms.</p>
              <p className="text-green-600 font-semibold mt-2">10% off today!</p>
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Hawaiian BBQ Plate</h4>
              <p className="text-gray-700">Featured at the Food Truck Hub.</p>
              <p className="text-green-600 font-semibold mt-2">Limited time special!</p>
            </div>
<<<<<<< HEAD
          ))}
        </div>
      </section>

      {/* Today's Specials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#065f46] mb-8">Today&apos;s Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dailySpecials.map((special, index) => (
            <div
              key={index}
              className="p-6 bg-[#fef9c3] border border-gray-200 rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#a16207] mb-2">{special.name}</h3>
              <p className="text-gray-600">Available at {special.location}</p>
              <p className="text-[#065f46] font-bold mt-2">{special.deal}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
=======
    return (
      <main className="flex-grow container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Manoa Munchies!</h2>
        <p>Discover your favorite campus meals and check out what’s available today.</p>
=======
          </div>
        </section>
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
      </main>
    );
  };
  
  export default MainContent;
<<<<<<< HEAD
  
>>>>>>> parent of f230689 (Update home to get more information)
=======
  
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
