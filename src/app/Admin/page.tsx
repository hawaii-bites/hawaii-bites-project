import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import supabase from '../services/supabaseClient'; // Adjust the path to your Supabase client

const AdminHomePage = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorLocation, setVendorLocation] = useState('');
  const [message, setMessage] = useState('');

  // Handle adding a new vendor
  const handleAddVendor = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!vendorName || !vendorLocation) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('FoodVendors')
        .insert([{ name: vendorName, location: vendorLocation }]);

      if (error) {
        console.error('Error adding vendor:', error.message);
        setMessage('Failed to add vendor. Please try again.');
      } else {
        setMessage('Vendor added successfully!');
        setVendorName('');
        setVendorLocation('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="admin-home-page"
        style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}
      >
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
          Admin Dashboard
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Welcome to the Hawaii Bites Admin Dashboard. Here, you can efficiently
          manage users, vendors, and menu data.
        </p>

        {/* Section: Add New Vendor */}
        <section style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Add New Vendor</h2>
          <form
            onSubmit={handleAddVendor}
            style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="vendorName"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                Vendor Name
              </label>
              <input
                type="text"
                id="vendorName"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
                placeholder="Enter vendor name"
                required
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="vendorLocation"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                Vendor Location
              </label>
              <input
                type="text"
                id="vendorLocation"
                value={vendorLocation}
                onChange={(e) => setVendorLocation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
                placeholder="Enter vendor location"
                required
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                color: '#fff',
                backgroundColor: '#28a745',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Vendor
            </button>
          </form>
          {message && (
            <p
              style={{
                marginTop: '15px',
                color: message.includes('successfully') ? 'green' : 'red',
              }}
            >
              {message}
            </p>
          )}
        </section>

        {/* Section: Manage Users */}
        <section style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Manage Users</h2>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            View and manage user profiles, and assign or revoke the vendor role
            as needed.
          </p>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            View and Edit Users
          </button>
        </section>

        {/* Section: Manage Vendors */}
        <section style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Manage Vendors</h2>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            View vendor profiles, update information, add new vendors, or remove
            existing ones.
          </p>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#28a745',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            View and Edit Vendors
          </button>
        </section>

        {/* Section: Consolidated Menu Directory */}
        <section style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333' }}>
            Consolidated Menu Directory
          </h2>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            Access and manage the comprehensive menu directory for all campus
            food locations.
          </p>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#ffc107',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            View Full Menu Directory
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AdminHomePage;
