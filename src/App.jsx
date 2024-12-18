import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';


import CourseMentor from './pages/mentor/mentor-course/CourseMentor';


    function App() {
        return (
          <BrowserRouter> {/* Wrap the Routes component with BrowserRouter */}
            <Routes>
                <Route path="/mentor/course" element={<CourseMentor />} />
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;