import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';

import SidebarMentor from './components/mentor/navigation/SidebarMentor';
import TopNavigationMentor from './components/mentor/navigation/TopNavigationMentor';



import DashboardContent from './pages/mentor/dashboard/DashboardMentor';
import ClassesMentor from './pages/mentor/dashboard/ClassesMentor';
import IsiLaporanMentor from './pages/mentor/dashboard/IsiLaporanMentor';


    function App() {
        return (
          <BrowserRouter>
          <div className='flex'>
            <div className='w-64 bg-blue-500 min-h-screen fixed'>
              <SidebarMentor/>
            </div>
            <div className="flex-1 min-h-screen ml-64">
              <div className='flex-1 overflow-hidden'>
              <TopNavigationMentor />
              </div>
              <div className='p-8 bg-gray-100'>
                <Routes>
                  <Route path="/mentor/dashboard" element={<DashboardContent />} />
                  <Route path="/mentor/classes" element={<ClassesMentor />} />
                  <Route path="/mentor/laporan-aktivitas-mentor" element={<IsiLaporanMentor />} />    
                </Routes>
              </div>
            </div>
          </div>
          
          </BrowserRouter>
        );
      }
      


export default App;