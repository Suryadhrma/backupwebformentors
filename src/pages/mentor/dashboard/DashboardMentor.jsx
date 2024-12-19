// src/pages/DashboardContent.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../components/mentor/MentorCard'; // Import the new ClassCard component

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
    navigate(`/mentor/classes/${id}`);
  };

  return (
    <div className="p-5 font-montserrat text-black">
      {/* Header */}
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">My Activity</h2>
        <div className="flex space-x-4 rounded-xl ml-auto mt-4">
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
      </header>

      {/* Cards */}
      <div className="flex flex-wrap justify-evenly mt-20">
        {filteredClasses.map((cls) => (
          <ClassCard 
            key={cls.id} // Make sure to provide a unique key for each card
            cls={cls} // Pass the correct class data
            onClick={() => handleCardClick(cls.id)} // Pass the correct onClick handler
            showProgressBar={true} 
            isMyActivity={true}  // This will hide participant count and rating
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
