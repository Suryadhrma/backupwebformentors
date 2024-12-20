// Button.js
import React from 'react';

const Button = ({ onTerima, onTolak, onBatal }) => {
  return (
    <div className="space-x-2">
      <button
        onClick={onBatal}
        className="px-8 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        Batal
      </button>
      <button
        onClick={onTolak}
        className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Tolak
      </button>
      <button
        onClick={onTerima}
        className="px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Terima
      </button>
    </div>
  );
};

export default Button;