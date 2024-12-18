import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';


import CourseMentor from './pages/mentor/mentor-course/CourseMentor';
import CreateCourse from './pages/mentor/mentor-create-course/CreateCourseMentor';
import AddMateriMentor from './pages/mentor/mentor-create-course/AddMateriMentor';
import SilabusMentor from './pages/mentor/mentor-create-course/SilabusMentor';
import ChatMentor from './pages/mentor/chat/ChatMentor';
import EditProfileMentor from './pages/mentor/profile/EditProfileMentor';
import ExchangeMentor from './pages/mentor/profile/ExchaneMentor';
import CoinMe from './pages/mentor/profile/Exchange/CoinMeMentor';
import CoinMeDetails from './pages/mentor/profile/Exchange/CoinMeDetailMentor';
import MoneyMe from './pages/mentor/profile/Exchange/MoneyMeMentor';
import MoneyMeDetailMentor from './pages/mentor/profile/Exchange/MoneyMeDetailMentor';


    function App() {
        return (
          <BrowserRouter> {/* Wrap the Routes component with BrowserRouter */}
            <Routes>
                <Route path="/mentor/course" element={<CourseMentor />} />
                <Route path="/mentor/create-course" element={<CreateCourse />} />
                <Route path="/mentor/materi-pembelajaran" element={<AddMateriMentor />} />
                <Route path="/mentor/isi-silabus" element={<SilabusMentor />} />
                <Route path="/mentor/chat" element={<ChatMentor />} />
                <Route path="/mentor/edit-profile" element={<EditProfileMentor />} />
                <Route path="/mentor/exchange" element={<ExchangeMentor />} />
                <Route path="/mentor/coinme" element={<CoinMe />} />
                <Route path="/mentor/coinme/detail" element={<CoinMeDetails />} />
                <Route path="/mentor/moneyme" element={<MoneyMe />} />
                <Route path="/mentor/moneyme/detail" element={<MoneyMeDetailMentor />} />
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;