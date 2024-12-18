import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';


import CourseMentor from './pages/mentor/mentor-course/CourseMentor';
import CreateCourse from './pages/mentor/mentor-create-course/CreateCourseMentor';
import AddMateriMentor from './pages/mentor/mentor-create-course/AddMateriMentor';
import SilabusMentor from './pages/mentor/mentor-create-course/SilabusMentor';
import ChatMentor from './pages/mentor/chat/ChatMentor';


    function App() {
        return (
          <BrowserRouter> {/* Wrap the Routes component with BrowserRouter */}
            <Routes>
                <Route path="/mentor/course" element={<CourseMentor />} />
                <Route path="/mentor/create-course" element={<CreateCourse />} />
                <Route path="/mentor/materi-pembelajaran" element={<AddMateriMentor />} />
                <Route path="/mentor/isi-silabus" element={<SilabusMentor />} />
                <Route path="/mentor/chat" element={<ChatMentor />} />
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;