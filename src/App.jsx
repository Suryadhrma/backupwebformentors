import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';
import Sidebar from './components/Sidebar';


import DashboardAdmin from './pages/admin/dashboard/DashboardAdmin';
import ValidationMentor from './pages/admin/dashboard/ValidationMentor';
import CourseValidation from './pages/admin/course-validation/CourseValidation';



    const App = () => {
        return (
          <BrowserRouter>
            <Routes>
                <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                <Route path="/admin/validation-mentor" element={<ValidationMentor/>} />
                <Route path="/admin/validation-course" element={<CourseValidation/>} />
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;