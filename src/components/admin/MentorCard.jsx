import React from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-start transform hover:scale-105 transition">
      <img
        src="https://via.placeholder.com/100"
        alt="Mentor Avatar"
        className="mx-auto mb-4 rounded-full"
      />
      <h3 className="text-lg font-semibold">{mentor.name}</h3>
      <p className="text-red-500 mt-[20px]">{mentor.status}</p>
      <div className="text-end mt-[20px]">
        {/* Ubah <a> menjadi <Link> */}
        <Link to="/admin/validation-mentor" className="text-gray-500 mt-2 inline-block hover:underline">
          Lihat Detail &gt;
        </Link>
      </div>
    </div>
  );
};

export default MentorCard;