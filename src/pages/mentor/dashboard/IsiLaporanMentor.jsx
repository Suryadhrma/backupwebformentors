import Reac, {useRef } from 'react';
import { Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ActionButton from '../../../components/mentor/button/ActionButtonMentor'; // Import tombol

const IsiLaporanMentor = () => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1)
    console.log("Batal ditekan");
  };

  const handleSubmit = () => {
    console.log("Laporan selesai");
  };

    // Fungsi untuk memicu input file
    const handleIconClick = () => {
        fileInputRef.current.click();
      };
    
      // Fungsi saat file diunggah
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && onUpload) {
          onUpload(file); // Callback untuk file yang diunggah
        }
      };

  return (
    <div className="bg-white p-6">
      {/* Header */}
      <header className="mb-8 mt-4">
        <h2 className="text-3xl font-bold text-gray-800">Laporan Mentor</h2>
      </header>

      {/* Form Laporan */}
      <div className="space-y-6">
        {/* Rincian selama pertemuan */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Rincian selama pertemuan berlangsung</h3>
          <textarea
            rows="4"
            className="w-full shadow-sm bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Tuliskan rincian selama pertemuan berlangsung"
          ></textarea>
        </div>

        {/* Dokumentasi selama pertemuan */}
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Dokumentasi selama pertemuan</h3>
          <div className="w-full justify-end shadow-sm bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex items-center">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <button
                type="button"
                onClick={handleIconClick}
                className="flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
                <Paperclip size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-end mt-8 space-x-4">
        <ActionButton
          label="Batal"
          onClick={handleCancel}
          variant="secondary"
        />
        <ActionButton
          label="Selesai"
          onClick={handleSubmit}
          variant="primary"
        />
      </div>
    </div>
  );
};

export default IsiLaporanMentor;
