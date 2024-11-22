import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image'; // Import from 'next/image' if you're using Next.js

const TodaysTopPicksPage: React.FC = () => {
  const topPicks = [
    {
      id: 1,
<<<<<<< HEAD
      name: 'Matcha Latte',
<<<<<<< HEAD
      image: '/matcha-latte.jpeg',
=======
      image: '/public/matcha-latte.jpg',
>>>>>>> parent of 3711c25 (Save local changes before pulling main)
      description: 'A refreshing and creamy matcha latte made with high-quality matcha powder and milk. A popular choice from Starbucks.',
      location: 'Starbucks (Campus Center)',
    },
    {
      id: 2,
      name: 'Orange Chicken',
<<<<<<< HEAD
      image: '/orange-chicken.jpeg',
=======
      image: '/public/orange-chicken.jpg',
>>>>>>> parent of 3711c25 (Save local changes before pulling main)
      description: 'Crispy chicken bites tossed in a sweet and tangy orange sauce. A crowd favorite from Panda Express.',
      location: 'Panda Express (Paradise Palms)',
    },
    {
      id: 3,
      name: 'Lemongrass Banh Mi',
<<<<<<< HEAD
      image: '/lemongrass-banhmi.jpeg',
=======
      image: '/public/lemongrass-banhmi.jpg',
>>>>>>> parent of 3711c25 (Save local changes before pulling main)
      description: 'A Vietnamese-style baguette sandwich filled with lemongrass grilled chicken, pickled vegetables, and fresh herbs. A must-try from Ba-Le.',
      location: 'Ba-Le (Paradise Palms)',
=======
      name: 'Spicy Ahi Poke Bowl',
      image: '/public/spicy-ahi-poke.jpg',
      description: 'Fresh ahi tuna mixed with spicy mayo, served over sushi rice. A favorite from Campus Center.',
      location: 'Campus Center',
    },
    {
      id: 2,
      name: 'Garlic Shrimp Plate',
      image: '/public/garlic-shrimp.jpg',
      description: 'Juicy shrimp sautéed in garlic butter sauce, served with rice and mac salad. Available at Manoa Gardens.',
      location: 'Manoa Gardens',
    },
    {
      id: 3,
      name: 'Vegan Burrito',
      image: '/public/vegan-burrito.jpg',
      description: 'A delicious burrito filled with beans, rice, guacamole, and veggies. Perfect for a healthy lunch!',
      location: 'Paradise Palms',
>>>>>>> parent of 1bd9f86 (Save local changes before pulling main)
    },
  ];

  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Today&apos;s Top Picks</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {topPicks.map((pick) => (
            <div
              key={pick.id}
              style={{
                width: '300px',
                margin: '10px',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Image
                src={pick.image}
                alt={pick.name}
                width={300}         // Define the width explicitly
                height={200}        // Define the height explicitly
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3 style={{ marginTop: '10px', color: '#000' }}>{pick.name}</h3>
              <p style={{ color: '#333', fontSize: '14px' }}>{pick.description}</p>
              <p style={{ color: '#555' }}><strong>Location:</strong> {pick.location}</p>
            </div>
          ))}
        </div>
=======
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Today's Top Picks</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {topPicks.map((pick) => (
          <div
            key={pick.id}
            style={{
              width: '300px',
              margin: '10px',
              padding: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <img
              src={pick.image}
              alt={pick.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px' }}>{pick.name}</h3>
            <p style={{ color: '#666' }}>{pick.description}</p>
            <p><strong>Location:</strong> {pick.location}</p>
          </div>
        ))}
>>>>>>> parent of 1bd9f86 (Save local changes before pulling main)
      </div>
      <Footer />
    </div>
  );
};

export default TodaysTopPicksPage;
