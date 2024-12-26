import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";
import { useNavigate } from "react-router-dom";

const RegisterPart2 = () => {
  const navigate = useNavigate();
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

    navigate('/mentor/register/pulici')
  };

  return (
    <div className="relative flex flex-wrap h-auto lg:h-screen items-center justify-center bg-white px-4 sm:px-8 lg:px-16 py-8">
      {/* Logo Rusa - Pojok Kiri Atas */}
      <img
        src={logoRusa}
        alt="Logo"
        className="absolute top-4 left-4 h-20 sm:h-24 lg:h-28"
      />

      {/* Kontainer Utama */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Section */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 text-center mb-8 md:mb-0">
          <img src={maskotImage} alt="Maskot" className="h-60 sm:h-72 lg:h-80 mb-4 hidden md:block" />
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 hidden md:block">
            To be mentor, unlock
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 hidden md:block">
            your potential
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 max-w-xl rounded-lg bg-[#3DD598B2] px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-16 mt-14 md:mt-0 md:mb-8 lg:mb-0">
          <h2 className="mb-8 text-center text-xl sm:text-2xl font-semibold text-gray-800">
            Daftar Sebagai Mentor
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <label
              htmlFor="cv"
              className="block w-full cursor-pointer rounded-md bg-white py-2 px-4 text-left text-gray-400"
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
              className="block w-full cursor-pointer rounded-md bg-white py-2 px-4 text-left text-gray-400"
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
              className="block w-full cursor-pointer rounded-md bg-white py-2 px-4 text-left text-gray-400"
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
              className="w-full rounded-3xl bg-white py-2 text-[#339989] transition duration-300 hover:bg-[#339989] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPart2;
