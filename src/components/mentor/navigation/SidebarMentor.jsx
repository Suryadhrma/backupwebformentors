import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Mail, Settings, Layers, LogOut, CircleHelp, ChevronDown } from 'lucide-react';
import logo from '../../../assets/rusatransparan.png';

const SidebarMentor = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Example user data (this should be fetched from an API or state in a real app)
    const user = {
        photo: 'https://www.w3schools.com/howto/img_avatar.png', // Placeholder image
        name: 'John Doe',
        email: 'john.doe@example.com'
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        // Implementasi logout
        console.log('Logging out...');
        navigate('/');
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <div className="relative flex">
            {/* Sidebar */}
            <div className={`w-64 bg-[#3DD598B2] text-white min-h-screen p-4 md:block ${isSidebarOpen ? 'block' : 'hidden'} flex flex-col`}>
                {/* Logo */}
                <img 
                    src={logo} 
                    className="w-[80%] item-center justify-center"
                    alt="rusa kejungkal"
                />

                {/* User Profile Section */}
                <div className="space-y-2 mb-6">
                    <div 
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={toggleProfileDropdown}
                    >
                        <img
                            src={user.photo}
                            alt="User"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <span className="block font-bold">{user.name}</span>
                            <span className="block text-sm">{user.email}</span>
                        </div>
                        <ChevronDown size={16} />
                    </div>

                    {/* Profile Dropdown */}
                    {isProfileDropdownOpen && (
                        <div className="bg-white text-black p-4 rounded-lg shadow-md mt-2 space-y-2">
                            <button
                                onClick={() => handleNavigation('/mentor/edit-profile')}
                                className="w-full text-left p-2 rounded hover:bg-gray-100"
                            >
                                Edit Profile
                            </button>
                            <button
                                onClick={() => handleNavigation('/mentor/exchange')}
                                className="w-full text-left p-2 rounded hover:bg-gray-100"
                            >
                                Exchange
                            </button>
                        </div>
                    )}
                </div>

                {/* Separator */}
                <div className="my-0 border-t border-white/100 mb-6"></div>

                {/* Menu Items */}
                <div className="space-y-2 flex-grow mb-16">
                    <button 
                        onClick={() => handleNavigation('/mentor/dashboard')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                    >
                        <Home className="w-5 h-5" />
                        <span>Dashboard</span>
                    </button>

                    <button 
                        onClick={() => handleNavigation('/mentor/course')}
                        className={`flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10 ${location.pathname === '/mentor/course' && 'bg-white/10'}`}
                    >
                        <Layers className="w-5 h-5" />
                        <span>Course Validation</span>
                    </button>

                    <button 
                        onClick={() => handleNavigation('/mentor/chat')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Chat</span>
                    </button>
                </div>

                {/* Setting, Help Center and Log Out (Aligned to the bottom) */}
                <div className="space-y-2 mt-auto">
                    <button 
                        onClick={() => handleNavigation('#')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                    >
                        <Settings className="w-5 h-5" />
                        <span>Setting</span>
                    </button>

                    <button 
                        onClick={() => handleNavigation('/mentor/help-center')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                    >
                        <CircleHelp className="w-5 h-5" />
                        <span>Help Center</span>
                    </button>

                    {/* Separator */}
                    <div className="my-0 border-t border-white/100 mt-6"></div>

                    <button 
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Toggle */}
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden fixed top-4 left-4 z-50 bg-[#6095FF] text-white p-3 rounded-full"
            >
                <span className="w-5 h-0.5 bg-white block mb-1"></span>
                <span className="w-5 h-0.5 bg-white block mb-1"></span>
                <span className="w-5 h-0.5 bg-white block"></span>
            </button>
        </div>
    );
};

export default SidebarMentor;
