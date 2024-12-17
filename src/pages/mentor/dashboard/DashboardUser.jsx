import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {
  // Hardcoded classes data
  const [classes] = useState([
    {
      id: 1,
      title: 'Class 1',
      traineeName: 'John Doe',
      progress: 75,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Class 2',
      traineeName: 'Jane Smith',
      progress: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Class 3',
      traineeName: 'Steve Johnson',
      progress: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Class 4',
      traineeName: 'Emma Watson',
      progress: 80,
      image: 'https://via.placeholder.com/150',
    },
  ]);
  
  const [activeTab, setActiveTab] = useState('progress'); // Default tab is 'progress'
  const navigate = useNavigate();

  // Filter classes based on the active tab
  const filteredClasses = classes.filter((cls) => {
    return activeTab === 'progress' ? cls.progress < 100 : cls.progress === 100;
  });

  const handleCardClick = (id) => {
    navigate(`/classes/${id}`);
  };

  return (
    <div className="p-5 font-montserrat text-black">
      <div className="absolute top-20 left-5 flex justify-between items-center mb-5">
        <h2 className="text-4xl font-bold">My Activity</h2>
        <div className="flex gap-4">
          <button
            className={`py-2 px-4 rounded-full text-lg ${activeTab === 'progress' ? 'bg-teal-200 font-bold' : 'bg-gray-300'} transition-all`}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </button>
          <button
            className={`py-2 px-4 rounded-full text-lg ${activeTab === 'completed' ? 'bg-teal-200 font-bold' : 'bg-gray-300'} transition-all`}
            onClick={() => setActiveTab('completed')}
          >
            Selesai
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-7 justify-evenly mt-20">
        {filteredClasses.map((cls, index) => (
          <div
            key={index}
            className="w-72 bg-white border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col items-center cursor-pointer"
            onClick={() => handleCardClick(cls.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleCardClick(cls.id)}
          >
            <img src={cls.image} alt={cls.title} className="w-full h-auto rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{cls.title}</h3>
            <p className="text-sm mt-2">Nama Trainee: {cls.traineeName}</p>
            <div className="mt-4 w-full">
              <progress value={cls.progress} max="100" className="w-full h-2 bg-gray-200 rounded-full"></progress>
              <span className="block mt-1 text-center">{cls.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
