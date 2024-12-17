import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';


import DashboardContent from './pages/mentor/dashboard/DashboardUser';


    function App() {
        return (
          <BrowserRouter> {/* Wrap the Routes component with BrowserRouter */}
            <Routes>
                <Route path="/dashboard" element={<DashboardContent />} />  
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;