// ValidationMentor.js
import React, { useState, useEffect } from 'react';
import Button from '../../../components/admin/Button';
import Reject from '../../../components/admin/Reject';
import Accept from '../../../components/admin/Accept';
import { useNavigate } from 'react-router-dom';

const ValidationMentor = () => {
    const [isTolakOpen, setIsTolakOpen] = useState(false);
    const [isAccOpen, setIsAccOpen] = useState(false);
    const navigate = useNavigate();
    const [mentor, setMentor] = useState(null);
    const [status, setStatus] = useState(null);

  useEffect(() => {
    // Contoh data dummy
    const fetchedMentor = {
      name: 'John Doe',
      expertise: 'Frontend Development',
      bio: 'Experienced web developer with a focus on modern JavaScript frameworks like React and Vue.',
      profilePic: 'https://via.placeholder.com/150',
      additionalPics: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ], 
    };

    setMentor(fetchedMentor);
  }, []);

  // Fungsi untuk tombol
  const handleTerima = () => {
   setIsAccOpen(true);
    // Lakukan aksi lain sesuai kebutuhan (misalnya kirim data ke server)
  };

  // Fungsi ketika tombol "Tolak" diklik
  const handleTolak = () => {
    setIsTolakOpen(true); // Menampilkan modal Tolak
  };

  // Fungsi ketika tombol "Batal" diklik
  const handleBatal = () => {
    navigate(-1)
    // Lakukan aksi lain sesuai kebutuhan (misalnya reset form atau status)
  };

  // Fungsi untuk menutup modal Tolak
  const handleCloseModal = () => {
    setIsTolakOpen(false);
    setIsAccOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 mt-8">
        <h2 className="text-3xl font-bold">Validation Mentor</h2>
      </header>

      {/* Content */}
      <div className="flex items-center space-x-8">
        <div className="flex-1">
          {mentor ? (
            <>
              <h3 className="text-lg font-semibold">Nama: {mentor.name}</h3>
              <p><strong>Posisi:</strong> {mentor.expertise}</p>
            </>
          ) : (
            <p>Loading mentor data...</p>
          )}
        </div>

        <div className="w-40 h-40">
          {mentor ? (
            <img
              src={mentor.profilePic}
              alt="Mentor Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full"></div>
          )}
        </div>
      </div>

      {/* Section Baru dengan Grid untuk Foto */}
      <section className="mt-16">
        <h3 className="text-xl font-semibold mb-4">Additional Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentor?.additionalPics?.map((pic, index) => (
            <div key={index} className="w-full h-64 bg-gray-300">
              <img
                src={pic}
                alt={`Additional Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Button Terima, Tolak, Batal */}
      <div className="fixed bottom-6 right-6">
        <Button
          onTerima={handleTerima} // Fungsi untuk tombol Terima
          onTolak={handleTolak}   // Fungsi untuk tombol Tolak
          onBatal={handleBatal}   // Fungsi untuk tombol Batal
        />
      </div>
      {/* Modal Tolak */}
      {isTolakOpen && (
        <Reject isOpen={isTolakOpen} onClose={handleCloseModal} />
      )}

      {isAccOpen&& (
        <Accept isOpen={isAccOpen} onClose={handleCloseModal}/>
      )}
    </div>
  );
};

export default ValidationMentor;