import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../components/mentor/MentorCard'; // Import the ClassCard component

const DashboardContent = ({ searchTerm }) => {
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

  // Hardcoded data for Courses
  const [courses] = useState([
    {
      id: 1,
      programName: 'Web Development 101',
      welcomeMessage: 'Welcome to Web Development 101! Start learning today.',
      participants: 120,
      rating: 4.5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      programName: 'React Basics',
      welcomeMessage: 'Learn the fundamentals of React with this course.',
      participants: 250,
      rating: 4.8,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      programName: 'Advanced JavaScript',
      welcomeMessage: 'Take your JavaScript skills to the next level!',
      participants: 180,
      rating: 4.6,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      programName: 'Node.js Mastery',
      welcomeMessage: 'Become a Node.js expert with our advanced course.',
      participants: 150,
      rating: 4.7,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const [activeTab, setActiveTab] = useState('progress');
  const navigate = useNavigate();

  // Filter activities and courses based on the search term
  const filteredActivities = activities.filter((activity) => {
    const title = activity.title.toLowerCase();
    const welcomeMessage = activity.welcomeMessage.toLowerCase();
    const searchLowerCase = searchTerm?.toLowerCase() || ''; // Pengecekan untuk searchTerm
    return title.includes(searchLowerCase) || welcomeMessage.includes(searchLowerCase);
  });

  const filteredCourses = courses.filter((course) => {
    const programName = course.programName.toLowerCase();
    const welcomeMessage = course.welcomeMessage.toLowerCase();
    const searchLowerCase = searchTerm?.toLowerCase() || ''; // Pengecekan untuk searchTerm
    return programName.includes(searchLowerCase) || welcomeMessage.includes(searchLowerCase);
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
        <h3 className="text-2xl font-bold">Activities</h3>
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

      {/* Course Cards */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Courses</h3>
        <div className="flex flex-wrap justify-evenly mt-4">
          {filteredCourses.map((course) => (
            <ClassCard
              key={course.id}
              cls={course}
              onClick={() => handleCardClick(course.id)}
              showProgressBar={false} // No progress bar for courses
              isMyActivity={false}    // Distinguish between activity and course
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
