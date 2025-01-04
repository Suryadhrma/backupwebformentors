import React, { useState, useEffect } from 'react';
import { User, Coins, Bell, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNavigationMentor = ({ currentPage, onSearchChange }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [balance, setBalance] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleBellClick = () => {
    navigate('/mentor/notification');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop View (Search bar visible) */}
          <div className="hidden lg:flex w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full py-2 px-4 pl-10 border border-gray-300 rounded-full"
            />
          </div>

          {/* Dropdown Button (Mobile View) */}
          <div className="lg:hidden ml-auto relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#7DE2D1] text-white font-bold rounded-xl p-2"
            >
              <User className="w-5 h-5" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 space-y-4 z-10">
                {/* Search Input in Dropdown */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-full py-2 px-4 border border-gray-300 rounded-full"
                />
                {/* Notification Button */}
                <button
                  onClick={handleBellClick}
                  className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 w-full"
                >
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </button>
                {/* Balance Button */}
                <button className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 w-full">
                  <Coins className="w-5 h-5 text-yellow-200 mr-2" />
                  {balance !== null ? `${balance.toFixed(2)}` : 'Loading...'}
                  <Plus className="ml-2 bg-[#339989] rounded-md" />
                </button>
                {/* Conditional Button (Create Course / Create Ads) */}
                {currentPage === '/mentor/course' ? (
                  <button
                    onClick={handleCourseClick}
                    className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 w-full"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Course
                  </button>
                ) : (
                  <button
                    onClick={handleAdsClick}
                    className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 w-full"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Ads
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Notification */}
            <button
              onClick={handleBellClick}
              className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 items-center"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Balance Button */}
            <button className="flex bg-[#7DE2D1] text-white font-bold rounded-xl p-2 items-center">
              <Coins className="w-5 h-5 text-yellow-200 mr-2" />
              {balance !== null ? `${balance.toFixed(2)}` : 'Loading...'}
              <Plus className="ml-2 bg-[#339989] rounded-md" />
            </button>

            {/* Conditional Button (Create Course / Create Ads) */}
            {currentPage === '/mentor/course' ? (
              <button
                onClick={handleCourseClick}
                className="bg-[#7DE2D1] text-white rounded-xl px-4 py-2"
              >
                Create Course
              </button>
            ) : (
              <button
                onClick={handleAdsClick}
                className="bg-[#7DE2D1] text-white rounded-xl px-4 py-2"
              >
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
