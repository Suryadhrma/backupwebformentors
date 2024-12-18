import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';


import DashboardContent from './pages/mentor/dashboard/DashboardMentor';
import ClassesMentor from './pages/mentor/dashboard/ClassesMentor';
import IsiLaporanMentor from './pages/mentor/dashboard/IsiLaporanMentor';


    function App() {
        return (
          <BrowserRouter> {/* Wrap the Routes component with BrowserRouter */}
            <Routes>
                <Route path="/dashboard" element={<DashboardContent />} />
                <Route path="/classes" element={<ClassesMentor />} />
                <Route path="/laporan-mentor" element={<IsiLaporanMentor />} />    
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;