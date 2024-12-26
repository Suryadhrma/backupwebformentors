import React, { useState } from "react";
import logoRusa from "../../../assets/logorusa.png";
import maskotImage from "../../../assets/maskot.png";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClick = () => {
    navigate("/mentor/dashboard");
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen bg-white px-4 py-8 sm:px-8 lg:px-16">
      {/* Logo Rusa */}
      <img
        src={logoRusa}
        alt="Logo"
        className="absolute top-4 left-4 h-16 sm:h-20 lg:h-24"
      />

      {/* Left Section */}
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
      <div className="w-full lg:w-1/2 max-w-xl rounded-lg bg-[#3DD598B2] px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-16 mt-6 md:mt-0 md:mb-8 lg:mb-0">
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Last Updated on 5/12/2022
          </p>
        </div>

        {/* Scrollable Clauses */}
        <div className="h-64 lg:h-80 overflow-y-auto bg-white border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-bold text-black">Clause 1</h2>
          <p className="text-justify text-gray-800 text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in.
          </p>
          <h2 className="text-lg font-bold text-black mt-4">Clause 2</h2>
          <p className="text-justify text-gray-800 text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            condimentum eget purus in.
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleClick}
          type="submit"
          className="mt-6 w-full rounded-3xl bg-white py-2 text-[#339989] transition duration-300 hover:bg-[#339989] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
        >
          Daftar
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
