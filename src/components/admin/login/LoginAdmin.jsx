import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";
import appleIcon from "../../../assets/apple.png";
import googleIcon from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate =  useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password } = formData;

    if (!email || !password) {
      alert("Harap isi semua kolom.");
      return;
    }

    navigate('/admin/dashboard')
    console.log({ email, password });

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-white px-4">
      {/* Logo Rusa - Pojok Kiri Atas */}
      <img
        src={logoRusa}
        alt="Logo"
        className="absolute top-4 left-4 h-20 md:h-28"
      />



      {/* Kontainer Utama */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Section */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 text-center mb-8 md:mb-0">
          <img src={maskotImage} alt="Maskot" className="h-48 md:h-80 mb-4 hidden md:block" />
        <p className="text-lg md:text-3xl font-medium text-gray-700 hidden md:block">
          To be mentor, unlock
        </p>
        <p className="text-lg md:text-3xl font-medium text-gray-700 hidden md:block">
          your potential
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 max-w-xl rounded-lg bg-[#3DD598B2] px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-20 mt-14 md:mt-0 md:mb-8 lg:mb-0">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login Sebagai Admin
        </h2>
        <form onSubmit={handleSubmit} className="relative top-4 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
            required
          />
          <button
          
            type="submit"
            className="relative top-12 w-full rounded-3xl  bg-[#FFF] py-2 text-[#339989] transition duration-300 hover:bg-[#38A892]"
          >
            Login
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
