import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Mail, Layers, LogOut, Ticket, BellPlus } from 'lucide-react';
import logo from '../../../assets/rusatransparan.png';

const SidebarAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path, title) => {
        navigate(path);
    };

    const handleLogout = () => {
        // Logout logic here
        navigate('/');
    };

    return (
        <div className="relative flex">
            {/* Sidebar */}
            <div className={`w-64 bg-[#3DD598B2] text-white min-h-screen p-4 md:block ${isSidebarOpen ? 'block' : 'hidden'} flex flex-col`}>
                <img 
                    src={logo} 
                    className='w-[80%] mx-auto mb-6'
                    alt="rusa kejungkal" />

                {/* User Profile */}
                <div className="relative mb-6">
                    <button 
                        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10">
                        <img 
                            src="https://via.placeholder.com/40" 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full" />
                        <div className="text-left">
                            <p className="font-medium">Mahmud Hermawan</p>
                            <p className="text-sm">mhdhermawan@gmail.com</p>
                        </div>
                    </button>

                    {isProfileDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded shadow-lg z-50">
                            <button 
                                onClick={() => navigate('/admin/voucher-generator', 'Voucher')}
                                className="flex items-center mx-auto mb-2 space-x-2 w-full p-2 rounded hover:bg-[#27DEBF]"
                            >
                                <Ticket className="w-5 h-5" />
                                <span>Voucher Generator</span>
                            </button>
                            <button 
                                onClick={() => navigate('/admin/notification-generator', 'Notification')}
                                className="flex items-center space-x-2 w-full p-2 rounded hover:bg-[#27DEBF]"
                            >
                                <BellPlus className="w-5 h-5" />
                                <span>Notification Generator</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Menu Sections */}
                <div className="space-y-2 mt-6 flex-grow">
                    <button 
                        onClick={() => handleNavigation('/admin/dashboard', 'Dashboard')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10">
                        <Home className="w-5 h-5" />
                        <span>Dashboard</span>
                    </button>

                    <button 
                        onClick={() => handleNavigation('/admin/validation-course', 'Course Validation')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10">
                        <Layers className="w-5 h-5" />
                        <span>Course Validation</span>
                    </button>

                    <button 
                        onClick={() => handleNavigation('/admin/chat', 'Chat')}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10 mb-10">
                        <Mail className="w-5 h-5" />
                        <span>Chat</span>
                    </button>
                </div>

                {/* Log Out Button */}
                <div className='mt-auto'>
                    <div className="border-t border-white/100 mb-2"></div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10">
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Toggle */}
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden fixed top-4 left-4 z-50 bg-[#6095FF] text-white p-3 rounded-full">
                <span className="w-5 h-0.5 bg-white block mb-1"></span>
                <span className="w-5 h-0.5 bg-white block mb-1"></span>
                <span className="w-5 h-0.5 bg-white block"></span>
            </button>
        </div>
    );
};

export default SidebarAdmin;
