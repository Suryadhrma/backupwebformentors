import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Pastikan ini sesuai dengan path komponen Layout
import DashboardContent from './pages/mentor/dashboard/DashboardMentor';


import CourseMentor from './pages/mentor/mentor-course/CourseMentor'
import CLassesMentor from './pages/mentor/dashboard/ClassesMentor'
import IsiLaporanMentor from './pages/mentor/dashboard/IsiLaporanMentor'
import CreateCourse from './pages/mentor/mentor-create-course/CreateCourseMentor'
import AddMateriMentor from './pages/mentor/mentor-create-course/AddMateriMentor';
import SilabusMentor from './pages/mentor/mentor-create-course/SilabusMentor';
import ChatMentor from './pages/mentor/chat/ChatMentor'
import EditProfileMentor from './pages/mentor/profile/EditProfileMentor'
import ExchangeMentor from './pages/mentor/profile/ExchaneMentor'
import CoinMe from './pages/mentor/profile/Exchange/CoinMeMentor'
import CoinMeDetails from './pages/mentor/profile/Exchange/CoinMeDetailMentor'
import MoneyMe from './pages/mentor/profile/Exchange/MoneyMeMentor'
import MoneyMeDetailMentor from './pages/mentor/profile/Exchange/MoneyMeDetailMentor'
import Createads from './pages/mentor/ads/CreateAdsMentor'
import HelpCenterMentor from './pages/mentor/help-center/HelpCenterMentor';
import NotificationsMentor from './pages/mentor/notification/NotificationMentor';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mendefinisikan handleSearchChange di dalam App
  const handleSearchChange = (term) => {
    setSearchTerm(term); // Update state dengan search term yang baru
    // Anda bisa menambahkan logika lebih lanjut untuk menangani pencarian di sini
    console.log('Search term:', term); // Debugging untuk memastikan nilai term diperbarui
  };

  return (
    <Router>
      <Routes>
        {/* Mentor Routes */}
        <Route
          path="/mentor/dashboard"
          element={
            <Layout onSearchChange={handleSearchChange}>  {/* Pass handler ke Layout */}
              <DashboardContent searchTerm={searchTerm} />  {/* Pass searchTerm ke komponen anak */}
            </Layout>
          }
        />
        <Route
          path="/mentor/classes"
          element={
            <Layout>  {/* Pass handler ke Layout */}
              <CLassesMentor/>  {/* Pass searchTerm ke komponen anak */}
            </Layout>
          }
        />
        <Route
          path="/mentor/isi-aktivitas-mentor"
          element={
            <Layout>  {/* Pass handler ke Layout */}
              <IsiLaporanMentor/>  {/* Pass searchTerm ke komponen anak */}
            </Layout>
          }
        />
        <Route
          path="/mentor/course"
          element={
            <Layout onSearchChange={handleSearchChange}>  {/* Pass handler ke Layout */}
              <CourseMentor searchTerm={searchTerm} />  {/* Pass searchTerm ke komponen anak */}
            </Layout>
          }
        />
        <Route 
          path="/mentor/create-course" 
          element={
            <Layout>
              <CreateCourse /> 
            </Layout>
            }
        />
        <Route 
          path="/mentor/materi-pembelajaran" 
          element={
            <Layout>
              <AddMateriMentor />
            </Layout>
          }
        />
        <Route 
          path="/mentor/isi-silabus" 
          element={
            <Layout>
              <SilabusMentor />
            </Layout>
          } 
        />
         <Route path="/mentor/chat" element={<Layout> <ChatMentor /> </Layout>} />
         <Route path="/mentor/edit-profile" element={<Layout><EditProfileMentor /></Layout>} />
         <Route path="/mentor/exchange" element={<Layout><ExchangeMentor /></Layout>} />
         <Route path="/mentor/coinme" element={<Layout><CoinMe/></Layout>} />
         <Route path="/mentor/coinme/detail" element={<Layout><CoinMeDetails /></Layout>} />
         <Route path="/mentor/moneyme" element={<Layout><MoneyMe /></Layout>} />
         <Route path="/mentor/moneyme/detail" element={<Layout><MoneyMeDetailMentor /></Layout>} />
         <Route path="/mentor/create-ads" element={<Layout><Createads /></Layout>} />
         <Route path="/mentor/help-center" element={<Layout><HelpCenterMentor /></Layout>} />
         <Route path="/mentor/notification" element={<Layout><NotificationsMentor /></Layout>} />


        {/* Routes lainnya */}
      </Routes>
    </Router>
  );
}

export default App;
