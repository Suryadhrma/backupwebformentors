import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateAds = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [totalPrice, setTotalPrice] = useState(50000); // Default price
  const navigate = useNavigate();

  const handleCancle = () => {
    navigate(-1);
  };

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourse(selectedCourse);
    // Recalculate the price whenever course changes
    calculatePrice(selectedCourse, selectedDuration);
  };

  const handleDurationChange = (event) => {
    const selectedDuration = event.target.value;
    setSelectedDuration(selectedDuration);
    // Recalculate the price whenever duration changes
    calculatePrice(selectedCourse, selectedDuration);
  };

  const calculatePrice = (course, duration) => {
    let price = 50000; // Base price

    // Calculate based on the course
    if (course === 'course1') {
      price = 50000;
    } else if (course === 'course2') {
      price = 100000;
    }

    // Add additional price for duration
    if (duration === '2week') {
      price += 50000; // For 2 weeks, add more
    }

    setTotalPrice(price);
  };

  const handleSubmit = () => {
    // Implement the logic to create the ad
    console.log('Creating ad with:', {
      course: selectedCourse,
      duration: selectedDuration,
      totalPrice: totalPrice,
    });
  };

  useEffect(() => {
    // Recalculate price when course or duration changes
    calculatePrice(selectedCourse, selectedDuration);
  }, [selectedCourse, selectedDuration]);

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10">
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">Create Ads</h2>
      </header>
      <div className="space-y-4">
        <div>
          <label htmlFor="course" className="text-gray-700 font-medium">
            Pilih Course yang ingin kamu iklankan
          </label>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <select
              id="course"
              className="flex-1 bg-transparent border-0 focus:ring-0 text-gray-500"
              value={selectedCourse}
              onChange={handleCourseChange}
            >
              <option value="">Pilih Course yang ingin kamu iklankan</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
            </select>
            <ChevronDown size={20} className="text-gray-500" />
          </div>
        </div>
        <div>
          <label htmlFor="duration" className="text-gray-700 font-medium">
            Pilih Berapa lama kamu iklankan
          </label>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <select
              id="duration"
              className="flex-1 bg-transparent border-0 focus:ring-0 text-gray-500"
              value={selectedDuration}
              onChange={handleDurationChange}
            >
              <option value="">Pilih Berapa lama kamu iklankan</option>
              <option value="1week">1 Week</option>
              <option value="2week">2 Weeks</option>
            </select>
            <ChevronDown size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-md bg-green-500 text-white px-4 py-2 rounded-lg flex justify-between items-center">
        <span>Total Harga</span>
        <span className="font-bold">Rp. {totalPrice.toLocaleString()}</span>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-4 sm:space-y-0">
        <button
          onClick={handleCancle}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Batal
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default CreateAds;
