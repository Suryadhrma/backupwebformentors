import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../components/mentor/MentorCard'; // Import the ClassCard component

const CourseMentor = () => {
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

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/classes/${id}`);
  };

  return (
    <div className="p-5 font-montserrat text-black">
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">My Classes</h2>
      </header>

      <div className="flex flex-wrap justify-evenly mt-20">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            cls={cls}
            onClick={() => handleCardClick(cls.id)} // Passing the onClick handler
            showProgressBar={false} // Here we don't need the progress bar
          />
        ))}
      </div>
    </div>
  );
};

export default CourseMentor;
