import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../components/mentor/MentorCard'; // Import the ClassCard component

const DashboardMentor = ({ searchTerm }) => {
  // Hardcoded data for Activity
  const [activities] = useState([
    {
      id: 1,
      title: 'Class 1',
      traineeName: 'John Doe',
      progress: 75,
      welcomeMessage: 'Welcome to Class 1! Let’s start your journey.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Class 2',
      traineeName: 'Jane Smith',
      progress: 100,
      welcomeMessage: 'Congratulations, you’ve completed Class 2!',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Class 3',
      traineeName: 'Steve Johnson',
      progress: 50,
      welcomeMessage: 'Class 3 is halfway through. Keep going!',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Class 4',
      traineeName: 'Emma Watson',
      progress: 80,
      welcomeMessage: 'Class 4 is almost complete. Great job!',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const [activeTab, setActiveTab] = useState('progress');
  const navigate = useNavigate();

  // Filter activities based on the search term and active tab
  const filteredActivities = activities.filter((activity) => {
    const title = activity.title.toLowerCase();
    const welcomeMessage = activity.welcomeMessage.toLowerCase();
    const searchLowerCase = searchTerm?.toLowerCase() || ''; // Pengecekan untuk searchTerm

    // Check if the activity matches the active tab
    const isCompleted = activity.progress === 100;
    const isProgressing = activity.progress < 100;

    if (activeTab === 'completed' && !isCompleted) return false; // Only show completed classes
    if (activeTab === 'progress' && !isProgressing) return false; // Only show classes in progress

    return title.includes(searchLowerCase) || welcomeMessage.includes(searchLowerCase);
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

      {/* Activity Cards */}
      <div className="mt-8">
        <div className="flex flex-wrap justify-evenly mt-4">
          {filteredActivities.map((activity) => (
            <ClassCard
              key={activity.id}
              cls={activity}
              onClick={() => handleCardClick(activity.id)}
              showProgressBar={true}
              isMyActivity={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMentor;
