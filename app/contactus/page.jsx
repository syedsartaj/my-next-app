'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footerfour from '../components/Footerfour';
import { useData } from '../DataContext'; // ✅ Update the path if different

const ContactUs = () => {
  const { sheet2Data, loading } = useData();

  if (loading) return <p className="text-center p-10">Loading...</p>;

  // Safely extract body_aboutus from sheet2Data[0]
    const headerRow = sheet2Data.find(row => row.Header);
 const compname = headerRow.body_contactus || '';

  return (
    <div>
      <Navbar />
      <div className="bg-white text-gray-900 py-10 px-6 max-w-6xl mx-auto">
        <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: compname }} />
      </div>
      <Footerfour />
    </div>
  );
};

export default ContactUs;
