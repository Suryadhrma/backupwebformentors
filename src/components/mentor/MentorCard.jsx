import React from 'react';

const ClassCard = ({ cls, onClick }) => {
  return (
    <div
      className="w-72 bg-white border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col items-center cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="relative w-full">
        <img src="/api/placeholder/400/320" alt="placeholder" className="w-full h-auto rounded-md" />
      </div>
      <h3 className="text-xl font-semibold mt-4">{cls.title}</h3>
      <p className="text-sm mt-2">Nama Trainee: {cls.traineeName}</p>
      <div className="mt-4 w-full">
        <div className="flex items-center justify-end">
          <span className="text-sm font-medium">1/4 Lessons</span>
        </div>
        {/* Progress bar container */}
        <div className="flex items-center w-full mt-2">
          {/* Progress bar */}
          <div className="relative flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
          {/* Progress percentage */}
          <span className="ml-2 text-sm font-medium text-gray-700">{cls.progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
