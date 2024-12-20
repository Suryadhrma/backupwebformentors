import React from 'react';

const Accept = ({ isOpen, onClose }) => {
  // Use an object for the image
  const img = {
    succed: 'https://via.placeholder.com/150',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 relative overflow-y-auto max-h-[90vh]">
        <div className="flex flex-col justify-center items-center bg-[#27DEBF] text-white p-8 rounded-lg space-y-4">
          <img src={img.succed} alt="Mentor Diterima" className="w-32 h-32 object-cover rounded-full" />
          <div className="mt-4 space-x-2">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accept;