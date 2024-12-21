import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import LayoutAdmin from './components/layout/LayoutAdmin';
import LayoutMentor from './components/layout/LayoutMentor';

// Halaman Admin
import LoginAdmin from './components/admin/login/LoginAdmin';
import DashboardAdmin from './pages/admin/dashboard/DashboardAdmin';
import ValidationMentor from './pages/admin/dashboard/ValidationMentorAdmin';
import CourseValidationAdmin from './pages/admin/course-validation/CourseValidationAdmin';
import ValidationMentorCourse from './pages/admin/course-validation/CourseDetailAdmin';
import ChatAdmin from './pages/admin/chat/ChatAdmin'
import VoucherGenerator from './pages/admin/voucher/VoucherAdmin';
import NotificationsGenerator from './pages/admin/notification/NotificationAdmin';

// Halaman Mentor
import RegisterMentor from './components/mentor/register/register'
import RegisterCopyMentor from './components/mentor/register/registercopy'
import PrivacyPulici from './pages/mentor/privacypolicy/privacypolicy'
import DashboardMentor from './pages/mentor/dashboard/DashboardMentor'
import CLassesMentor from './pages/mentor/dashboard/ClassesMentor'
import IsiLaporanMentor from './pages/mentor/dashboard/IsiLaporanMentor'
import CourseMentor from './pages/mentor/mentor-course/CourseMentor'
import CreateCourseMentor from './pages/mentor/mentor-create-course/CreateCourseMentor'
import AddMateriMentor from './pages/mentor/mentor-create-course/AddMateriMentor';
import SilabusMentor from './pages/mentor/mentor-create-course/SilabusMentor';
import ChatMentor from './pages/mentor/chat/ChatMentor'
import EditProfileMentor from './pages/mentor/profile/EditProfileMentor'
import ExchangeMentor from './pages/mentor/profile/ExchaneMentor'
import CoinMe from './pages/mentor/profile/Exchange/CoinMeMentor'
import CoinMeDetails from './pages/mentor/profile/Exchange/CoinMeDetailMentor'
import MoneyMe from './pages/mentor/profile/Exchange/MoneyMeMentor'
import MoneyMeDetailMentor from './pages/mentor/profile/Exchange/MoneyMeDetailMentor'
import CreateAdsMentor from './pages/mentor/ads/CreateAdsMentor'
import HelpCenterMentor from './pages/mentor/help-center/HelpCenterMentor';
import NotificationsMentor from './pages/mentor/notification/NotificationMentor';
import LoginMentor from './components/mentor/login/LoginMentor';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Routes>
        {/* Routes untuk Admin */}
        <Route
          path="/admin"
          element={
              <LoginAdmin />      
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <LayoutAdmin
              onSearchChange={handleSearchChange}
              currentPage="/"
            >
              <DashboardAdmin searchTerm={searchTerm} />
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/validation-mentor"
          element={
            <LayoutAdmin
              onSearchChange={handleSearchChange}
              currentPage="/admin/validation-mentor"
            >
              <ValidationMentor searchTerm={searchTerm} />
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/validation-course"
          element={
            <LayoutAdmin
              onSearchChange={handleSearchChange}
              currentPage="/admin/validation-course"
            >
              <CourseValidationAdmin searchTerm={searchTerm} />
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/validation-course/detail"
          element={
            <LayoutAdmin
              onSearchChange={handleSearchChange}
              currentPage="/admin/validation-course/detail"
            >
              <ValidationMentorCourse searchTerm={searchTerm} />
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/chat"
          element={
            <LayoutAdmin>
              <ChatAdmin/>
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/voucher-generator"
          element={
            <LayoutAdmin
              onSearchChange={handleSearchChange}
              currentPage="/admin/voucher-generator"
            >
              <VoucherGenerator searchTerm={searchTerm} />
            </LayoutAdmin>
          }
        />
        <Route
          path="/admin/notification-generator"
          element={
            <LayoutAdmin
              onSearchChange={handleSearchChange}
              currentPage="/admin/notification-generator"
            >
              <NotificationsGenerator searchTerm={searchTerm} />
            </LayoutAdmin>
          }
        />
        

        {/* Routes untuk Mentor */}

        <Route
          path="/"
          element={
              <LoginMentor />      
          }
        />

        <Route
          path="/mentor/register"
          element={
              <RegisterMentor />      
          }
        />
        <Route
          path="/mentor/register/next"
          element={
              <RegisterCopyMentor />      
          }
        />
        <Route
          path="/mentor/register/pulici"
          element={
              <PrivacyPulici />      
          }
        />
        <Route
          path="/mentor/dashboard"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/dashboard"
            >
              <DashboardMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/classes"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/classes"
            >
              <CLassesMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/laporan-aktivitas-mentor"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/laporan-aktivitas-mentor"
            >
              <IsiLaporanMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/course"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/course"
            >
              <CourseMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/create-course"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/create-course"
            >
              <CreateCourseMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/materi-pembelajaran"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/materi-pembelajaran"
            >
              <AddMateriMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/isi-silabus"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/isi-silabus"
            >
              <SilabusMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/chat"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/chat"
            >
              <ChatMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/edit-profile"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/edit-profile"
            >
              <EditProfileMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/exchange"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/exchange"
            >
              <ExchangeMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/coinme"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/coinme"
            >
              <CoinMe searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/coinme/detail"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/coinme/detail"
            >
              <CoinMeDetails searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/moneyme"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/moneyme"
            >
              <MoneyMe searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/moneyme/detail"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/moneyme/detail"
            >
              <MoneyMeDetailMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/create-ads"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/create-ads"
            >
              <CreateAdsMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/help-center"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/help-center"
            >
              <HelpCenterMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />
        <Route
          path="/mentor/notification"
          element={
            <LayoutMentor
              onSearchChange={handleSearchChange}
              currentPage="/mentor/notification"
            >
              <NotificationsMentor searchTerm={searchTerm} />
            </LayoutMentor>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
