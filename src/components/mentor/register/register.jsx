import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";
import appleIcon from "../../../assets/apple.png";
import googleIcon from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Harap isi semua kolom.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    navigate('/mentor/register/next')
    console.log({ fullName, email, password });

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const performGoogleLogin = () => {
    console.log("Google Login triggered");
  };

  const performAppleLogin = () => {
    console.log("Apple Login triggered");
  };

  const handleLogin = () => {
    navigate('/')
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-white px-4">
      {/* Logo Rusa - Pojok Kiri Atas */}
      <img
        src={logoRusa}
        alt="Logo"
        className="absolute top-0 left-0 m-4 h-20 md:h-28"
      />


      {/* Kontainer Utama */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 text-center">
          <img src={maskotImage} alt="Maskot" className="h-64 md:h-80 mb-4" />
          <p className="text-lg md:text-3xl font-medium text-gray-700">
            To be mentor, unlock
          </p>
          <p className="text-lg md:text-3xl font-medium text-gray-700">
            your potential
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 max-w-xl rounded-lg bg-[#3DD598B2] px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-16 mt-20 md:mt-0 md:mb-8 lg:mb-0">
          <h2 className="mb-6 text-center text-xl md:text-2xl font-semibold text-gray-800">
            Daftar Sebagai Mentor
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Nama Lengkap"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
              required
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
              required
            />
            <button
              type="submit"
              className="w-full rounded-3xl bg-[#FFF] py-2 text-[#339989] transition duration-300 hover:bg-[#339989] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
            >
              Daftar
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm mb-4">Or social login</p>
            <div className="flex justify-center gap-4">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.preventDefault();
                  performGoogleLogin();
                }}
              >
                <img src={googleIcon} alt="Google Login" className="h-10 w-10" />
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-700 text-center">
            Sudah punya akun?{" "}
            <a
              onClick={handleLogin}
              className="text-[#FFF] hover:underline cursor-pointer"
            >
              Masuk disini
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
