import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";
import appleIcon from "../../../assets/apple.png";
import googleIcon from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";

const LoginMentor = () => {
  const navigate =  useNavigate();
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

    if ( !email || !password) {
      alert("Harap isi semua kolom.");
      return;
    }

    navigate('/mentor/dashboard')
    console.log({ fullName, email, password });

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleRegist = () => {
    navigate('/mentor/register')
  }

  const performGoogleLogin = () => {
    console.log("Google Login triggered");
  };

  const performAppleLogin = () => {
    console.log("Apple Login triggered");
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
      <div className="relative left-[200px] w-md rounded-lg bg-[#3DD598B2] px-11 py-16 mx-[200px]">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login Sebagai Mentor
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

        {/* Social Login Buttons */}
        <div className="relative top-5 mt-6 text-center ">
          <p className="relative top-8 text-gray-600 text-sm mb-4">Or social login</p>
          <div className="flex justify-center gap-4">
            <button
              className="relative top-5 left-2 flex items-center justify-center w-12 h-12 rounded-full bg-none shadow-none hover:scale-105 transition-transform"
              onClick={(e) => {
                e.preventDefault();
                performAppleLogin();
              }}
            >
              <img src={appleIcon} alt="Apple Login" className="h-10 w-10" />
            </button>
            <button
              className="relative top-5 right-2 flex items-center justify-center w-12 h-12 rounded-full bg-none shadow-none hover:scale-105 transition-transform"
              onClick={(e) => {
                e.preventDefault();
                performGoogleLogin();
              }}
            >
              <img src={googleIcon} alt="Google Login" className="h-10 w-10" />
            </button>
          </div>
        </div>

        <p className="relative top-14 left-[0%] mt-6 text-sm text-gray-700 text-center  ">
          Belum punya akun?{" "}
          <a
            onClick={handleRegist}
            className="text-[#FFF] hover:underline"
          >
            Daftar disini
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginMentor;
