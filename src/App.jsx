import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/TopNavigation';


import DashboardAdmin from './pages/admin/dashboard/DashboardAdmin';
import ValidationMentor from './pages/admin/dashboard/ValidationMentor';
import CourseValidation from './pages/admin/course-validation/CourseValidation';
import ValidationMentorCourse from './pages/admin/course-validation/CourseDetail';



    const App = () => {
        return (
          <BrowserRouter>
          <div className='flex'>
            <div className='w-64 bg-blue-500 min-h-screen fixed'>
              <Sidebar/>
            </div>
            <div className="flex-1 min-h-screen ml-64">
              <div className='flex-1 overflow-hidden'>
              <TopNavigation />
              </div>
              <div className='p-8 bg-gray-100'>
              <Routes>
                  <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                  <Route path="/admin/validation-mentor" element={<ValidationMentor/>} />
                  <Route path="/admin/validation-course" element={<CourseValidation/>} />
                  <Route path="/admin/validation-course/detail" element={<ValidationMentorCourse/>} />
              </Routes>
              </div>
            </div>
          </div>
          
          </BrowserRouter>
        );
      }
      


export default App;