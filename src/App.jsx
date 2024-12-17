import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import api from './api';
import DashboardAdmin from './pages/admin/dashboard/DashboardAdmin';
import ValidationMentor from './pages/admin/dashboard/ValidationMentor';
import Register from './components/mentor/register/register'
import RegisterDua from './components/mentor/register/registerdua'
import Registercopy from './components/mentor/register/registercopy'


    function App() {
        return (
          <BrowserRouter> {/* Wrap the Routes component with BrowserRouter */}
            <Routes>
                <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                <Route path="/admin/validation-mentor" element={<ValidationMentor/>} />
                <Route path="/mentor/register" element={<Register/>} />
                <Route path="/mentor/registercopy" element={<Registercopy/>} />
            </Routes>
          </BrowserRouter>
        );
      }
      


export default App;