import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SquarePen } from 'lucide-react';

const ClassesMentor = () => {
  const navigate = useNavigate();

  // Data dummy untuk kelas
  const cls = {
    title: "Pemrograman Web",
    trainee: "Mahmud",
  };

  const handleLaporanClick = (id) => {
    navigate(`/mentor/laporan-aktivitas-mentor/${id}`);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
      {/* Header */}
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">My Course: {cls.title}</h2>
        <p className="text-gray-500 mt-2">My Trainee: {cls.trainee}</p>
      </header>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((meeting) => (
          <div
            key={meeting}
            className="bg-white shadow-lg border border-gray-100 rounded-lg p-4 flex flex-col space-y-4"
          >
            {/* Pertemuan Detail */}
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Pertemuan {meeting}</p>
              <button className="text-red-500 flex items-center">
                <SquarePen className="mr-2" size={16} /> Belum Dibuat
              </button>
            </div>

            {/* Tombol Isi Laporan Aktivitas */}
            <button
              onClick={() => handleLaporanClick(meeting)}
              className="bg-[#27DEBF] text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#158270] transition duration-200"
            >
              Isi Laporan Aktivitas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesMentor;
