import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ActionButton from '../../../components/mentor/button/ActionButtonMentor';

const CreateCourse = () => {
  const [projectInfo, setProjectInfo] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1)
    console.log("Batal ditekan");
  };

  const handleDone = () => {
    console.log("Laporan selesai");
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleNavigateToMaterials = () => {
    navigate('/mentor/materi-pembelajaran'); // Ganti path ini dengan rute tujuan
  };

  const handleSubmit = () => {
    console.log({
      projectInfo,
      videoFile,
      price,
    });
    alert('Data berhasil disimpan!');
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Tambah Project Baru</h2>
      <div className="space-y-4">
        {/* Informasi Project */}
        <div>
          <h3 className="text-gray-700 font-medium">Informasi Project</h3>
          <p className="text-gray-500 mt-2">
            (Informasi yang diperlukan: latar belakang bahasa, struktur dasar, tujuan, format, client,
            hosting, dan lain-lain)
          </p>
          <textarea
            value={projectInfo}
            onChange={(e) => setProjectInfo(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2"
            placeholder="Tuliskan informasi project..."
            rows={4}
          ></textarea>
        </div>

        {/* Upload Video */}
        <div>
          <h3 className="text-gray-700 font-medium">Upload Video</h3>
          <div className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2 flex items-center space-x-4">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
            >
              <PlusCircle size={20} className="mr-2" />
              {videoFile ? videoFile.name : 'Tambahkan video yang menjelaskan project anda'}
            </label>
          </div>
        </div>

        {/* Harga Project */}
        <div>
          <h3 className="text-gray-700 font-medium">Harga Project</h3>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2"
            placeholder="Masukkan harga project"
          />
        </div>

        {/* Materi Pembelajaran */}
        <div>
          <h3 className="text-gray-700 font-medium">Materi Pembelajaran</h3>
          <button
            onClick={handleNavigateToMaterials}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2 flex items-center justify-between hover:bg-gray-200 transition"
          >
            <span className="text-gray-500">Materi Pembelajaran</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
          onClick={handleDone}
          variant="primary"
        />
      </div>
    </div>
  );
};

export default CreateCourse;
