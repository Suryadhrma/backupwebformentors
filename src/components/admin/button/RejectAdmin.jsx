import React, { useState } from 'react';

const Reject = ({ isOpen, onClose }) => {
  const [reason, setReason] = useState('');

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Alasan Tolak:', reason);
    onClose(); // Menutup modal setelah submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 relative overflow-y-auto max-h-[90vh]">
        <div className="bg-[#27DEBF] text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center">Alasan ditolak</h3>
          <p className='font-semibold'>Jelaskan alasanmu</p>
          <textarea
            className="text-black mt-4 w-full p-2 border rounded-md"
            value={reason}
            onChange={handleReasonChange}
            rows="4"
            placeholder="Masukkan alasan..."
          />
          <div className="mt-4 space-x-2">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Kirim
            </button>
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

export default Reject;