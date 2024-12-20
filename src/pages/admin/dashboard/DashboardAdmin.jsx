import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Untuk membaca route dari sidebar

import ValidationCard from '../../../components/admin/card/ValidationCardAdmin';

const mentors = [
  { id: 1, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 2, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 3, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 4, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 5, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
  { id: 6, name: "Jerome Polan", status: "Menunggu Konfirmasi" },
];

const courses = [
  { id: 1, title: "Course A", status: "Menunggu Konfirmasi" },
  { id: 2, title: "Course B", status: "Menunggu Konfirmasi" },
  { id: 3, title: "Course C", status: "Menunggu Konfirmasi" },
  { id: 4, title: "Course D", status: "Menunggu Konfirmasi" },
  { id: 5, title: "Course E", status: "Menunggu Konfirmasi" },
  { id: 6, title: "Course F", status: "Menunggu Konfirmasi" },
];

const DashboardAdmin = () => {
  // State untuk tab status (permintaan, diterima, ditolak)
  const [activeTab, setActiveTab] = useState('permintaan');
  const location = useLocation(); // Untuk mengetahui URL saat ini

  const section = location.pathname.includes('course') ? 'course' : 'mentor'; // Tentukan apakah tampilkan course atau mentor

  // Filter data berdasarkan tab aktif
  const filteredMentors = mentors.filter((mentor) => {
    if (activeTab === 'permintaan') return mentor.status === 'Menunggu Konfirmasi';
    if (activeTab === 'diterima') return mentor.status === 'Diterima';
    if (activeTab === 'ditolak') return mentor.status === 'Ditolak';
    return true;
  });

  const filteredCourses = courses.filter((course) => {
    if (activeTab === 'permintaan') return course.status === 'Menunggu Konfirmasi';
    if (activeTab === 'diterima') return course.status === 'Diterima';
    if (activeTab === 'ditolak') return course.status === 'Ditolak';
    return true;
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 mt-8">
        <h2 className="text-3xl font-bold">{section === 'mentor' ? 'Validation Mentor' : 'Validation Course'}</h2>
        <div className="flex space-x-4 rounded-xl">
          <button
            onClick={() => handleTabClick('permintaan')}
            className={`px-6 py-2 rounded-xl transition ${activeTab === 'permintaan' ? 'bg-[#27DEBF80] text-black font-semibold' : 'bg-gray-200'}`}
          >
            Permintaan
          </button>
          <button
            onClick={() => handleTabClick('diterima')}
            className={`px-6 py-2 rounded-xl transition ${activeTab === 'diterima' ? 'bg-[#27DEBF80] text-black font-semibold' : 'bg-gray-200'}`}
          >
            Diterima
          </button>
          <button
            onClick={() => handleTabClick('ditolak')}
            className={`px-6 py-2 rounded-xl transition ${activeTab === 'ditolak' ? 'bg-[#27DEBF80] text-black font-semibold' : 'bg-gray-200'}`}
          >
            Ditolak
          </button>
        </div>
      </header>

      {/* Validation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {section === 'mentor'
          ? filteredMentors.map((mentor) => (
              <ValidationCard key={mentor.id} data={mentor} type="mentor" />
            ))
          : filteredCourses.map((course) => (
              <ValidationCard key={course.id} data={course} type="course" />
            ))}
      </section>
    </div>
  );
};

export default DashboardAdmin;
