import React, { useState } from 'react';
import ValidationCard from '../../../components/admin/card/ValidationCardAdmin';

const course = [
  { id: 1, name: "Jerome Polan", title: "Course A", status: "Menunggu Konfirmasi" },
  { id: 2, title: "Course B", status: "Menunggu Konfirmasi" },
  { id: 3, title: "Course C", status: "Menunggu Konfirmasi" },
  { id: 4, title: "Course D", status: "Menunggu Konfirmasi" },
  { id: 5, title: "Course E", status: "Menunggu Konfirmasi" },
  { id: 6, title: "Course F", status: "Menunggu Konfirmasi" },
];

const ValidationCourseMentor = () => {
  // State untuk tab yang aktif
  const [activeTab, setActiveTab] = useState('permintaan');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fungsi untuk mengubah tab aktif
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setDropdownOpen(false); // Close the dropdown when a tab is clicked
  };

  // Menyaring course berdasarkan tab aktif
  const filteredCourses = course.filter((course) => {
    if (activeTab === 'permintaan') return course.status === 'Menunggu Konfirmasi';
    if (activeTab === 'diterima') return course.status === 'Diterima';
    if (activeTab === 'ditolak') return course.status === 'Ditolak';
    return true;
  });

  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 mt-8">
        <h2 className="text-3xl font-bold">Validation Course Mentor</h2>

        {/* Buttons on larger screens */}
        <div className="hidden lg:flex space-x-4 rounded-xl">
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

        {/* Dropdown button on smaller screens */}
        <div className="relative lg:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#27DEBF80] text-black font-semibold rounded-xl p-2"
          >
            Filter
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 space-y-4 z-10">
              <button
                onClick={() => handleTabClick('permintaan')}
                className={`w-full px-4 py-2 text-left rounded-xl ${activeTab === 'permintaan' ? 'bg-[#27DEBF80] text-black' : 'bg-gray-200'}`}
              >
                Permintaan
              </button>
              <button
                onClick={() => handleTabClick('diterima')}
                className={`w-full px-4 py-2 text-left rounded-xl ${activeTab === 'diterima' ? 'bg-[#27DEBF80] text-black' : 'bg-gray-200'}`}
              >
                Diterima
              </button>
              <button
                onClick={() => handleTabClick('ditolak')}
                className={`w-full px-4 py-2 text-left rounded-xl ${activeTab === 'ditolak' ? 'bg-[#27DEBF80] text-black' : 'bg-gray-200'}`}
              >
                Ditolak
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Validation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredCourses.map((course) => (
          <ValidationCard key={course.id} data={course} type="course" />
        ))}
      </section>
    </div>
  );
};

export default ValidationCourseMentor;
