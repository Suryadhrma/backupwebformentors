import React from 'react';
import SidebarAdmin from '../admin/navigation/SidebarAdmin';
import TopNavigationAdmin from '../admin/navigation/TopNavigationAdmin';

const LayoutAdmin = ({ children, onSearchChange, currentPage }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigationAdmin
          currentPage={currentPage}
          onSearchChange={onSearchChange}
        />

        {/* Content */}
        <div className="p-6 flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
