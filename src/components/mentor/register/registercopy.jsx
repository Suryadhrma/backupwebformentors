import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";

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
    <div className="relative flex h-screen items-center justify-center bg-white px-4">
      {/* Logo Rusa - Pojok Kiri Atas */}
      <img
        src={logoRusa}
        alt="Logo"
        className="absolute top-0 left-0 m-4 h-28"
      />

      {/* Left Section */}
      <div className="relative left-[200px] flex w-1/2 flex-col items-center justify-center text-center">
        <img src={maskotImage} alt="Maskot" className="h-80 mb-4" />
        <p className="text-3xl font-medium text-gray-700">To be mentor, unlock</p>
        <p className="text-3xl font-medium text-gray-700">your potential</p>
      </div>

      {/* Right Section */}
      <div className="relative left-[200px] w-lg rounded-lg bg-[#3DD598B2] px-11 py-16 mx-[200px]">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Daftar Sebagai Mentor
        </h2>
        <form
          onSubmit={handleSubmit}
          className="relative top-4 space-y-4"
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
