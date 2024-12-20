import React, { useState } from 'react';
import SidebarMentor from '../mentor/navigation/SidebarMentor';
import TopNavigationMentor from '../mentor/navigation/TopNavigationMentor';

const LayoutMentor = ({ children, onSearchChange, currentPage }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarMentor onSearchChange={onSearchChange} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigationMentor
          currentPage={currentPage}
          onSearchChange={onSearchChange}
        />

        {/* Content */}
        <div className="p-6 flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default LayoutMentor;
