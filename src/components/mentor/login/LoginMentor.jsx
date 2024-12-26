import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";
import appleIcon from "../../../assets/apple.png";
import googleIcon from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";

const LoginMentor = () => {
  const navigate = useNavigate();
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
    const { email, password } = formData;

    if (!email || !password) {
      alert("Harap isi semua kolom.");
      return;
    }

    navigate("/mentor/dashboard");
    console.log({ email, password });

    setFormData({
      email: "",
      password: "",
    });
  };

  const handleRegist = () => {
    navigate("/mentor/register");
  };

  const performGoogleLogin = () => {
    console.log("Google Login triggered");
  };

  const performAppleLogin = () => {
    console.log("Apple Login triggered");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-white px-4">
      {/* Logo Rusa - Pojok Kiri Atas */}
      <img
        src={logoRusa}
        alt="Logo"
        className="absolute top-4 left-4 h-20 md:h-28"
      />

      <button onClick={handleAdmin} className="absolute top-4 right-4">
        Login Admin (Testing)
      </button>

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
        <div className="w-full lg:w-1/2 max-w-xl rounded-lg bg-[#3DD598B2] px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-16 mt-14 md:mt-0 md:mb-8 lg:mb-0">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Login Sebagai Mentor
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full rounded-3xl bg-white py-2 text-[#339989] transition duration-300 hover:bg-[#339989] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
            >
              Login
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="relative top-10 mt-6 text-center">
            <p className="text-gray-600 text-sm mb-4">Or social login</p>
            <div className="flex justify-center gap-4">
              <button
                className="relative bottom-4 flex items-center justify-center w-12 h-12 rounded-full hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.preventDefault();
                  performGoogleLogin();
                }}
              >
                <img src={googleIcon} alt="Google Login" className="h-10 w-10" />
              </button>
            </div>
          </div>

          <p className="relative top-7 mt-6 text-sm text-gray-700 text-center">
            Belum punya akun?{' '}
            <a
              onClick={handleRegist}
              className="text-white hover:underline cursor-pointer"
            >
              Daftar disini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginMentor;
