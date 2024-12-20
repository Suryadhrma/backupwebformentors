import React from 'react';

const ActionButton = ({ label, onClick, variant = "primary", className = "" }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-200 font-medium";

  // Tentukan gaya tombol berdasarkan varian
  const variantStyles = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {label}
    </button>
  );
};

export default ActionButton;
