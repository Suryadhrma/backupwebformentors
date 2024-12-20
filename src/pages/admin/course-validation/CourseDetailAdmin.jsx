import React, { useState } from 'react';
import Button from '../../../components/admin/button/ButtonAdmin';
import Reject from '../../../components/admin/button/RejectAdmin';
import Accept from '../../../components/admin/button/AcceptAdmin';
import { useNavigate } from 'react-router-dom';

const ValidationMentorCourse = () => {
  // Declare state for modals (Reject and Accept)
  const [isTolakOpen, setIsTolakOpen] = useState(false);
  const [isAccOpen, setIsAccOpen] = useState(false);
  const navigate = useNavigate();

  // Function for "Terima" button
  const handleTerima = () => {
    setIsAccOpen(true); // Open the accept modal
  };

  // Function for "Tolak" button
  const handleTolak = () => {
    setIsTolakOpen(true); // Open the reject modal
  };

  // Function for "Batal" button
  const handleBatal = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to close both modals
  const handleCloseModal = () => {
    setIsTolakOpen(false);
    setIsAccOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Validation Mentor Course</h2>
      </header>

      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-gray-300 rounded-full">
          {/* Placeholder image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Mentor"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl">Ringkasan</h2>
          <p className="text-xl font-semibold text-end text-gray-600 mt-1">Harga Project: Rp.150.000</p>
          <p className="mt-3 text-gray-500">
            HTML (Hypertext Markup Language) adalah bahasa markup yang digunakan untuk membuat struktur halaman
            web. Dalam HTML, terdapat elemen-elemen yang membentuk struktur halaman, seperti header, paragraf, dan
            lain-lain.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700">Video Pengantar</h2>
        <div className="mt-4 bg-gray-300 w-full h-64 rounded-lg">
          {/* Placeholder video */}
          <img
            src="https://via.placeholder.com/560x315?text=Video+Placeholder"
            alt="Video Pengantar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700">Profil Mentor</h2>
        <p className="mt-4 text-gray-600">
          Aria Santoso adalah mahasiswa tingkat akhir Jurusan Teknik Informatika di Universitas Teknologi Indonesia,
          berusia 23 tahun. Ia ahli dalam HTML CSS JavaScript dan memiliki pengalaman di bidang web development dan
          UI/UX design.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700">Role Mentor</h2>
        <ul className="list-disc ml-6 mt-4 text-gray-600">
          <li>WEB DEVELOPER</li>
          <li>UI/UX DESIGNER</li>
          <li>Fotografer</li>
        </ul>
      </div>

      {/* Button Terima, Tolak, Batal */}
      <div className="fixed bottom-6 right-6">
        <Button
          onTerima={handleTerima} // Fungsi untuk tombol Terima
          onTolak={handleTolak}   // Fungsi untuk tombol Tolak
          onBatal={handleBatal}   // Fungsi untuk tombol Batal
        />
      </div>

      {/* Modal Tolak */}
      {isTolakOpen && <Reject isOpen={isTolakOpen} onClose={handleCloseModal} />}

      {/* Modal Terima */}
      {isAccOpen && <Accept isOpen={isAccOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default ValidationMentorCourse;
