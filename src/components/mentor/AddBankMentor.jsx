import React, { useState } from 'react';

const AddBankModal = ({ isOpen, closeModal, addBank }) => {
  const [newBankName, setNewBankName] = useState('');
  const [newAccountNumber, setNewAccountNumber] = useState('');
  const [newAccountHolder, setNewAccountHolder] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (newBankName && newAccountNumber && newAccountHolder) {
      addBank(newBankName, newAccountNumber, newAccountHolder); // Pass data back to parent
      closeModal(); // Close the modal
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Tambah Rekening Bank</h3>
            
            {/* Input fields for new bank */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Nama Bank</label>
                <input
                  type="text"
                  value={newBankName}
                  onChange={(e) => setNewBankName(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  placeholder="Masukkan Nama Bank"
                />
              </div>

              <div>
                <label className="block text-gray-700">Nomor Rekening</label>
                <input
                  type="text"
                  value={newAccountNumber}
                  onChange={(e) => setNewAccountNumber(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  placeholder="Masukkan Nomor Rekening"
                />
              </div>

              <div>
                <label className="block text-gray-700">Nama Pemegang Rekening</label>
                <input
                  type="text"
                  value={newAccountHolder}
                  onChange={(e) => setNewAccountHolder(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  placeholder="Masukkan Nama Pemegang Rekening"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBankModal;
