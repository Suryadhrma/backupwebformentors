import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMentor from './mentor/navigation/SidebarMentor';  // Pastikan ini sesuai dengan path Anda
import TopNavigationMentor from './mentor/navigation/TopNavigationMentor';  // Pastikan ini sesuai dengan path Anda

const Layout = ({ children, onSearchChange }) => {
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
        <TopNavigationMentor
          currentPage={location.pathname}
          onSearchChange={onSearchChange}
        />

        {/* Page Content */}
        <div className="p-8 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;  // Ekspor Layout sebagai default
