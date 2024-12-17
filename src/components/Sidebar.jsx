import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Mail, Ticket, Layers, LogOut, BellPlus } from 'lucide-react';
import logo from '../assets/rusatransparan.png'

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();


    const handleNavigation = (path, title) => {
        navigate(path);
        setTitle(title);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="relative flex">
            {/* Sidebar - Hidden on mobile */}
            <div className={`w-64 bg-[#3DD598B2] text-white min-h-screen p-4 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>

                {/* Menu Sections */}
                <div className="space-y-2">
                        <img 
                        src={logo} 
                        className='w-[80%] item-center justify-center'
                        alt="rusa kejungkal" />
                    <div>
                        <div className="space-y-2">
                            <button 
                                onClick={() => handleNavigation('/admin/dashboard', 'Dashboard')}
                                className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                            >
                                <Home className="w-5 h-5" />
                                <span>Dashboard</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <button 
                            onClick={() => navigate('/admin/validation-course', 'Course Validation')}
                            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                        >
                            <Layers className="w-5 h-5" />
                            <span>Course Validation</span>
                        </button>
                    </div>
                    <div>
                        <button 
                            onClick={() => navigate('/admin/chat', 'Chat')}
                            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Chat</span>
                        </button>
                    </div>
                    <div>
                        <button 
                            onClick={() => navigate('/admin/voucher-generator', 'Voucher')}
                            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                        >
                            <Ticket className="w-5 h-5" />
                            <span>Voucher Generator</span>
                        </button>
                    </div>
                    <div>
                        <button 
                            onClick={() => navigate('/admin/notification-generator', 'Notification')}
                            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                        >
                            <BellPlus className="w-5 h-5" />
                            <span>Notification Generator</span>
                        </button>
                    </div>


                    <div>
                        <div className="space-y-2 fixed bottom-0">
                            <button 
                                onClick={handleLogout}
                                className="flex items-center space-x-2 w-full p-2 rounded hover:bg-white/10"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Log Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar toggle */}
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

export default Sidebar;