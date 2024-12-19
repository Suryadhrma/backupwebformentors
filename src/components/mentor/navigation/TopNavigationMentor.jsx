import React, { useState, useEffect } from 'react';
import { User, Coins, Bell, Plus, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNavigationMentor = ({ currentPage, onSearchChange }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setBalance(125.75);
    }, 1000);
  }, []);

  const handleCourseClick = () => {
    navigate('/mentor/create-course');
  };

  const handleAdsClick = () => {
    navigate('/mentor/create-ads');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (onSearchChange) {
      onSearchChange(value); // Panggil fungsi onSearchChange yang diteruskan dari parent
    }
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Search Input */}
          <div className="w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            {/* Balance Button */}
            <button className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 items-center">
              <Coins className="w-5 h-5 text-yellow-500" />
              {balance !== null ? `$${balance.toFixed(2)}` : 'Loading...'}
              <Plus className="ml-2 bg-[#339989] rounded-md" />
            </button>

            {/* Conditional Button (Create Course / Create Ads) */}
            {currentPage === '/mentor/course' ? (
              <button
                onClick={handleCourseClick}
                className="bg-[#7DE2D1] text-white rounded-xl px-4 py-2">
                Create Course
              </button>
            ) : (
              <button
                onClick={handleAdsClick}
                className="bg-[#7DE2D1] text-white rounded-xl px-4 py-2">
                Create Ads
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationMentor;
