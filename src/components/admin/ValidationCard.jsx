import React from 'react';
import { useNavigate } from 'react-router-dom';

const ValidationCard = ({ data, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === 'mentor') {
      navigate(`/admin/validation-mentor/${data?.id}`, { state: { mentorData: data } });
    } else if (type === 'course') {
      navigate(`/admin/validation-course/detail/${data?.id}`, { state: { courseData: data } });
    }
  };

  // Check if data is undefined or null
  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-start transform hover:scale-105 transition">
      {/* Avatar */}
      <img
        src="https://via.placeholder.com/100"
        alt={`${type === 'mentor' ? 'Mentor' : 'Course'} Avatar`}
        className="mx-auto mb-4 rounded-full"
      />

      {/* Name or Title */}
      <h3 className="text-lg font-semibold">{data?.name || data?.title || 'No Title Provided'}</h3>

      {/* Status */}
      <p className="text-red-600 mt-1">{data?.status || 'Status not available'}</p>

      {/* View Details Button */}
      <div onClick={handleClick} className="text-end mt-4 cursor-pointer text-gray-700 hover:underline">
        Lihat Detail &gt;
      </div>
    </div>
  );
};

export default ValidationCard;
