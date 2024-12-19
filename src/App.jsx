import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SidebarMentor from './components/mentor/navigation/SidebarMentor';
import TopNavigationMentor from './components/mentor/navigation/TopNavigationMentor';
import DashboardContent from './pages/mentor/dashboard/DashboardMentor';
import ClassesMentor from './pages/mentor/dashboard/ClassesMentor';
import IsiLaporanMentor from './pages/mentor/dashboard/IsiLaporanMentor';
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
import CreateAds from './pages/mentor/ads/CreateAdsMentor';
import HelpCenterMentor from './pages/mentor/help-center/HelpCenterMentor';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#3DD598B2] text-white min-h-screen fixed">
        <SidebarMentor />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 min-h-screen">
        {/* Top Navigation */}
        <TopNavigationMentor currentPage={location.pathname} />

        {/* Page Content */}
        <div className="p-8 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Mentor Routes */}
        <Route
          path="/mentor/dashboard"
          element={
            <Layout>
              <DashboardContent />
            </Layout>
          }
        />
        <Route
          path="/mentor/classes"
          element={
            <Layout>
              <ClassesMentor />
            </Layout>
          }
        />
        <Route
          path="/mentor/laporan-aktivitas-mentor"
          element={
            <Layout>
              <IsiLaporanMentor />
            </Layout>
          }
        />
        <Route
          path="/mentor/course"
          element={
            <Layout>
              <CourseMentor />
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
        <Route
          path="/mentor/chat"
          element={
            <Layout>
              <ChatMentor />
            </Layout>
          }
        />
        <Route
          path="/mentor/edit-profile"
          element={
            <Layout>
              <EditProfileMentor />
            </Layout>
          }
        />
        <Route
          path="/mentor/exchange"
          element={
            <Layout>
              <ExchangeMentor />
            </Layout>
          }
        />
        <Route
          path="/mentor/coinme"
          element={
            <Layout>
              <CoinMe />
            </Layout>
          }
        />
        <Route
          path="/mentor/coinme/detail"
          element={
            <Layout>
              <CoinMeDetails />
            </Layout>
          }
        />
        <Route
          path="/mentor/moneyme"
          element={
            <Layout>
              <MoneyMe />
            </Layout>
          }
        />
        <Route
          path="/mentor/moneyme/detail"
          element={
            <Layout>
              <MoneyMeDetailMentor />
            </Layout>
          }
        />
        <Route
          path="/mentor/create-ads"
          element={
            <Layout>
              <CreateAds />
            </Layout>
          }
        />
        <Route
          path="/mentor/help-center"
          element={
            <Layout>
              <HelpCenterMentor />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
