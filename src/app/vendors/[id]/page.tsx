"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the vendor menu type
interface VendorMenu {
  name: string;
  food: string[];
  drinks?: string[];
  dessert?: string[];
}

// Define the vendorMenus object with a strict type
const vendorMenus: Record<string, VendorMenu> = {
  "krazy-dogs": {
    name: "Krazy Dogs",
    food: ["Classic Dog", "Bacon Wrapped Dog", "Chili Cheese Dog", "L.A. Street Dog", "Chicago Dog"],
    drinks: ["Classic Lemonade", "Strawberry Lilikoi Lemonade"],
  },
  // Other vendors here...
};

const VendorPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const vendorId = params?.id as string;

  const vendorData = vendorMenus[vendorId];

  if (!vendorData) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f0fdf4]">
        <Navbar />
        <div className="container mx-auto py-10 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Vendor Not Found</h1>
          <p className="text-lg text-gray-700 mb-6">Sorry, the vendor you are looking for does not exist.</p>
          <button
            onClick={() => router.push("/home")}
            className="px-6 py-3 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669]"
          >
            Go Back to Homepage
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col mx-auto bg-[#f0fdf4]">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{vendorData.name}</h1>

        {vendorData.food.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Food</h2>
            <ul className="list-disc pl-6 text-gray-900 text-lg">
              {vendorData.food.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {vendorData.drinks && vendorData.drinks.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Drinks</h2>
            <ul className="list-disc pl-6 text-gray-900 text-lg">
              {vendorData.drinks.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {vendorData.dessert && vendorData.dessert.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Dessert</h2>
            <ul className="list-disc pl-6 text-gray-900 text-lg">
              {vendorData.dessert.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VendorPage;
