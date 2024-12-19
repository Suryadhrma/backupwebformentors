import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from '../../../components/mentor/MentorCard'; // Import the ClassCard component

const CourseMentor = ({ searchTerm }) => {
  const [classes] = useState([
    {
      id: 1,
      title: 'Program A',
      welcomeMessage: 'Selamat datang di Program A! Siap untuk belajar?',
      participantCount: 30,
      averageRating: 4.5,
      progress: 75,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Program B',
      welcomeMessage: 'Selamat datang di Program B! Ayo mulai perjalanan belajar ini!',
      participantCount: 25,
      averageRating: 5,
      progress: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Program C',
      welcomeMessage: 'Selamat datang di Program C! Semoga sukses!',
      participantCount: 20,
      averageRating: 1,
      progress: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Program D',
      welcomeMessage: 'Selamat datang di Program D! Let\'s begin!',
      participantCount: 15,
      averageRating: 4,
      progress: 80,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const filteredClasses = classes.filter((cls) => {
    if (!cls || !cls.title || !cls.welcomeMessage) {
      return false; // Jika data cls tidak valid, kita lewati
    }
  
    const title = cls.title.toLowerCase();
    const welcomeMessage = cls.welcomeMessage.toLowerCase();
    const searchLowerCase = searchTerm?.toLowerCase() || ''; // Pengecekan untuk searchTerm
  
    return (
      title.includes(searchLowerCase) || 
      welcomeMessage.includes(searchLowerCase)
    );
  });
  
  
  

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
        {filteredClasses.map((cls) => (
          <ClassCard
            key={cls.id}
            cls={cls}
            onClick={() => handleCardClick(cls.id)}
            showProgressBar={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseMentor;
