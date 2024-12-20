import React from 'react';

const ReportSuccesMentor = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Jangan render modal jika `isOpen` adalah false

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#27DEBF] p-6 rounded-2xl w-96 flex flex-col items-center">
        {/* Success image */}
        <img
          src="/success-image.png" // Pastikan gambar ini ada di folder public atau gunakan URL
          alt="Success"
          className="w-32 h-32 mb-4"
        />

        {/* Success message */}
        <h3 className="text-lg font-semibold mb-2">Laporan Terkirim</h3>
        <p className="text-sm text-gray-600 text-center mb-6">
          Terima kasih atas laporan Anda! Kami akan segera meninjau laporan ini.
        </p>

        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-white text-black px-6 py-2 rounded-xl"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default ReportSuccesMentor;
