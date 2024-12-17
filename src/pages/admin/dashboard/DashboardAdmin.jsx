// pages/admin/DashboardAdmin.jsx
import React, { useState } from 'react';
import MentorCard from '../../../components/admin/MentorCard';

const mentors = [
  { id: 1, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 2, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 3, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 4, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 5, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 6, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
];

const DashboardAdmin = () => {
  // State untuk tab yang aktif
  const [activeTab, setActiveTab] = useState('permintaan');

  // Fungsi untuk mengubah tab aktif
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 mt-8">
        <h2 className="text-3xl font-bold">Validation Mentor</h2>
          <div className="flex space-x-4 rounded-xl ">
            <button
              onClick={() => handleTabClick('permintaan')}
              className={`px-6 py-2 rounded-xl transition ${activeTab === 'permintaan' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Permintaan
            </button>
            <button
              onClick={() => handleTabClick('diterima')}
              className={`px-6 py-2 rounded-xl transition ${activeTab === 'diterima' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Diterima
            </button>
            <button
              onClick={() => handleTabClick('ditolak')}
              className={`px-6 py-2 rounded-xl transition ${activeTab === 'ditolak' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Ditolak
            </button>
          </div>

      </header>

      {/* Mentor Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </section>
    </div>
  );
};

export default DashboardAdmin;