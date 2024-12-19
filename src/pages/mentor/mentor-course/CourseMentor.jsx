import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../components/mentor/MentorCard'; // Import the ClassCard component

const CourseMentor = () => {
  const [classes] = useState([
    {
      id: 1,
      title: 'Program A',
      welcomeMessage: 'Selamat datang di Program A! Siap untuk belajar?',
      participantCount: 30,
      averageRating: 4.5,  // Rating rata-rata dari peserta
      progress: 75,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Program B',
      welcomeMessage: 'Selamat datang di Program B! Ayo mulai perjalanan belajar ini!',
      participantCount: 25,
      averageRating: 5, // Rating sempurna
      progress: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Program C',
      welcomeMessage: 'Selamat datang di Program C! Semoga sukses!',
      participantCount: 20,
      averageRating: 1,  // Rating rata-rata
      progress: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Program D',
      welcomeMessage: 'Selamat datang di Program D! Let\'s begin!',
      participantCount: 15,
      averageRating: 4,  // Rating 4 bintang
      progress: 80,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/mentor/course/${id}`);
  };

  return (
    <div className="p-5 font-montserrat text-black">
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">My Courses</h2>
      </header>

      <div className="flex flex-wrap justify-evenly mt-20">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            cls={cls}
            onClick={() => handleCardClick(cls.id)} // Passing the onClick handler
            showProgressBar={false} // Disabling the progress bar on CourseMentor page
          />
        ))}
      </div>
    </div>
  );
};

export default CourseMentor;
