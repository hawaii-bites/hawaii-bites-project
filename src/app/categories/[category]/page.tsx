"use client";

import React from "react";
import { useParams } from "next/navigation";

// Example menu items
const menuItems = [
  { name: "Apple 'n Greens Smoothie", category: "healthy", vendor: "Jamba Juice", description: "A refreshing plant-based smoothie." },
  { name: "Sweet Mango Sago", category: "healthy", vendor: "Saap Saap HI", description: "Delicious mango dessert with sago." },
  { name: "Reggi Dog", category: "vegetarian", vendor: "Veggi Dogs", description: "Topped with sauerkraut, spicy chili mayo, and crispy onion." },
  { name: "Daal", category: "vegetarian", vendor: "Lasoon", description: "Flavorful Indian lentil curry." },
  { name: "Fresh Cut Fruit Bowl", category: "healthy", vendor: "HoloHolo Grill", description: "Assorted fresh fruits in a bowl." },
  { name: "Orange Chicken", category: "popular", vendor: "Panda Express", description: "Tangy, crispy chicken in orange sauce." },
  { name: "Chili Cheese Dog", category: "popular", vendor: "Krazy Dogs", description: "Hot dog topped with chili, nacho cheese, and onions." },
  { name: "Loco Moco", category: "popular", vendor: "L&L", description: "Traditional Hawaiian comfort food with hamburger, gravy, and rice." },
];

const CategoryPage = () => {
  const params = useParams();
<<<<<<< HEAD
  const category = params?.category;
=======
  const categoryParam = params?.category;

<<<<<<< HEAD
  // Ensure categoryParam is a string
  const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
>>>>>>> parent of ac6df44 (Attempt to insure ability to use toLowerCase)
=======
  // Convert `categoryParam` to a string safely
  const category = typeof categoryParam === "string" 
    ? categoryParam 
    : Array.isArray(categoryParam) 
    ? categoryParam[0] 
    : null;
>>>>>>> parent of 102c0df (toLowerCase property)

  if (!category) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold capitalize mb-4">Invalid Category</h1>
        <p className="text-gray-600">Please select a valid category from the homepage.</p>
      </div>
    );
  }

  // Use `toLowerCase` safely
  const filteredItems = menuItems.filter(
    (item) => item.category === category.toLowerCase()
  );

  if (filteredItems.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold capitalize mb-4">Category: {category}</h1>
        <p className="text-gray-600">No items found for this category.</p>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col bg-[#f0fdf4] text-black">
      <Navbar />            {/* Render the Navbar component */}
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold capitalize text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Options</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg border">
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-sm text-gray-500 mt-2">Vendor: {item.vendor}</p>
            </div>
          ))}
        </div>
=======
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold capitalize text-center mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg border">
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-sm text-gray-500 mt-2">Vendor: {item.vendor}</p>
          </div>
        ))}
>>>>>>> parent of b6d6f91 (fixed the categories to have navbar and footer. Also attempt to give types to specials variable)
      </div>
    </div>
  );
};

export default CategoryPage;
