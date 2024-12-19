import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Pastikan ini sesuai dengan path komponen Layout
import DashboardContent from './pages/mentor/dashboard/DashboardMentor'; // Pastikan pathnya benar
import CourseMentor from './pages/mentor/mentor-course/CourseMentor'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mendefinisikan handleSearchChange di dalam App
  const handleSearchChange = (term) => {
    setSearchTerm(term); // Update state dengan search term yang baru
    // Anda bisa menambahkan logika lebih lanjut untuk menangani pencarian di sini
    console.log('Search term:', term); // Debugging untuk memastikan nilai term diperbarui
  };

  return (
    <Router>
      <Routes>
        {/* Mentor Routes */}
        <Route
          path="/mentor/dashboard"
          element={
            <Layout onSearchChange={handleSearchChange}>  {/* Pass handler ke Layout */}
              <DashboardContent searchTerm={searchTerm} />  {/* Pass searchTerm ke komponen anak */}
            </Layout>
          }
        />
        <Route
          path="/mentor/course"
          element={
            <Layout onSearchChange={handleSearchChange}>  {/* Pass handler ke Layout */}
              <CourseMentor searchTerm={searchTerm} />  {/* Pass searchTerm ke komponen anak */}
            </Layout>
          }
        />
        {/* Routes lainnya */}
      </Routes>
    </Router>
  );
}

export default App;
