import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../../components/mentor/button/ActionButtonMentor';
import Accept from '../../../components/mentor/button/AcceptMentor';

const SilabusMentor = () => {
  // State hooks to manage the form inputs
  const [judul, setJudul] = useState('');
  const [materi, setMateri] = useState('');
  const [tugas, setTugas] = useState('');
  const [file, setFile] = useState(null); // To manage the selected file

  const handleJudulChange = (e) => setJudul(e.target.value);
  const handleMateriChange = (e) => setMateri(e.target.value);
  const handleTugasChange = (e) => setTugas(e.target.value);

  const navigate = useNavigate();
  const [isAccOpen, setIsAccOpen] = useState(false);

  const handleCancel = () => {
    navigate(-1)
    console.log("Batal ditekan");
  };

  const handleDone = () => {
    setIsAccOpen(true);
    console.log("Laporan selesai");
  };
  
  const handleCloseModal = () => {
    setIsAccOpen(false);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
      {/* Title Section */}
      <h2 className="text-2xl font-bold mb-4">Judul Pembelajaran</h2>
      <input
        type="text"
        value={judul}
        onChange={handleJudulChange}
        placeholder="Masukkan Judul Pembelajaran"
        className="w-full p-2 border border-gray-300 rounded-lg mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      {/* Materi Pembelajaran Section */}
      <h2 className="text-2xl font-bold mb-4">Materi Pembelajaran</h2>
      <textarea
        value={materi}
        onChange={handleMateriChange}
        placeholder="Aktivitas yang akan dilaksanakan?"
        rows="4"
        className="w-full p-2 border border-gray-300 rounded-lg mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      {/* Tugas Section */}
      <h2 className="text-2xl font-bold mb-4">Tugas</h2>
      <div className="flex items-center justify-between mb-6">
        <textarea
          value={tugas}
          onChange={handleTugasChange}
          placeholder="Masukkan tugas yang akan diberikan"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        
        {/* Paperclip Icon with file input */}
        <label htmlFor="file-input" className="text-gray-500 cursor-pointer">
          <Paperclip size={20} />
        </label>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Display selected file name */}
      {file && (
        <div className="text-gray-500 mt-2">
          <p>File terlampir: {file.name}</p>
        </div>
      )}

      {/* Tombol Aksi */}
      <div className="flex justify-end mt-8 space-x-4">
        <ActionButton
          label="Batal"
          onClick={handleCancel}
          variant="secondary"
        />
        <ActionButton
          label="Selesai"
          onClick={handleDone}
          variant="primary"
        />
      </div>
      {isAccOpen&& (
        <Accept isOpen={isAccOpen} onClose={handleCloseModal}/>
      )}
    </div>
  );
};

export default SilabusMentor;
