import React, { useState } from "react";
import logoRusa from '../../../assets/logorusa.png';
import maskotImage from '../../../assets/maskot.png';
import kotakanImage from '../../../assets/kotakan.jpg';

const RegisterPart2 = () => {
  const [fileNames, setFileNames] = useState({
    cv: "Scan CV Kamu",
    ktp: "Scan KTP Kamu",
    photo: "Upload Foto Kamu",
  });

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    setFileNames((prev) => ({
      ...prev,
      [key]: file ? file.name : `Scan ${key.charAt(0).toUpperCase() + key.slice(1)} Kamu`,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fileNames.cv || fileNames.cv === "Scan CV Kamu") {
      alert("Harap unggah file CV Anda.");
      return;
    }

    if (!fileNames.ktp || fileNames.ktp === "Scan KTP Kamu") {
      alert("Harap unggah file KTP Anda.");
      return;
    }

    if (!fileNames.photo || fileNames.photo === "Upload Foto Kamu") {
      alert("Harap unggah foto Anda.");
      return;
    }

    alert("Form berhasil dikirim!");
  };

  return (
    <div className="relative min-h-screen bg-gray-100 font-[Montserrat]">
      {/* Logo */}
      <div className="absolute top-4 left-4">
        <img src={logoRusa} alt="Logo Website" className="w-28 h-auto rounded-lg shadow-lg" />
      </div>

      {/* Maskot Section */}
      <div className="absolute top-36 left-64 text-center">
        <img src={maskotImage} alt="Maskot Website" className="w-80 h-auto" />
        <p className="text-2xl font-semibold leading-none">To be mentor, unlock</p>
        <p className="text-2xl font-semibold leading-none">your potential</p>
      </div>

      {/* Form Section */}
      <div className="absolute top-8 right-36 relative">
        <img src={kotakanImage} alt="form Website" className="w-[550px] h-[600px]" />
        {/* Text Overlay */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-black whitespace-nowrap">
          Daftar Sebagai Mentor
        </div>
        {/* Form Overlay */}
        <form
          onSubmit={handleSubmit}
          className="absolute top-[45%] left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-6 space-y-4 bg-transparent"
        >
          <label
            htmlFor="cv"
            className="block w-full cursor-pointer rounded-md bg-gray-200 py-2 text-center text-gray-700"
          >
            {fileNames.cv}
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={(e) => handleFileChange(e, "cv")}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />

          <label
            htmlFor="ktp"
            className="block w-full cursor-pointer rounded-md bg-gray-200 py-2 text-center text-gray-700"
          >
            {fileNames.ktp}
          </label>
          <input
            type="file"
            id="ktp"
            name="ktp"
            onChange={(e) => handleFileChange(e, "ktp")}
            accept="image/*,.pdf"
            className="hidden"
          />

          <label
            htmlFor="photo"
            className="block w-full cursor-pointer rounded-md bg-gray-200 py-2 text-center text-gray-700"
          >
            {fileNames.photo}
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => handleFileChange(e, "photo")}
            accept="image/*"
            className="hidden"
          />

          <input
            type="text"
            placeholder="Link Portofolio"
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Role Kamu (Bisa Lebih Dari 1)"
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-green-500 py-2 text-white font-bold hover:bg-green-600 transition duration-300"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPart2;
