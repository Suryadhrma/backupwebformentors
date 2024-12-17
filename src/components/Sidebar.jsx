// /src/components/sidebar.jsx
import React from 'react';

import logorusa from '../assets/logorusa.png';
import profile from '../assets/profile.jpg';
import rumahan from '../assets/rumahan.png';
import tukcourse from '../assets/tukcourse.png';
import tukchat from '../assets/tukchat.png';
import settings from '../assets/Settings.png';
import tukhelpcenter from '../assets/tukhelpcenter.png';
import logot from '../assets/tuklogot.png';

const Sidebar = ({ isActive, onClose }) => {
    return (
        <>
            <div className={`fixed top-0 left-0 w-0 h-full flex flex-col bg-cover text-center p-5 transition-all duration-500 z-50 ${isActive ? 'w-72' : 'w-0'} bg-[url('/src/assets/sidebarr.jpg')]`}>
                <img src={logorusa} alt="Sidebar Logo" className="w-32 h-32 object-cover mx-auto mb-4" />
                
                <div className="flex items-center justify-start p-2 mb-6 border-b border-white">
                    <img src={profile} alt="Profile" className="w-12 h-12 rounded-full object-cover mr-3" />
                    <div className="text-left">
                        <p className="font-semibold text-white">Nama Pengguna</p>
                        <p className="text-sm text-white">email@example.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4 mb-8 ml-4">
                    <a href="#" className="flex items-center text-black hover:text-white transition duration-300">
                        <img src={rumahan} alt="Home" className="w-5 h-5 mr-3" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center text-black hover:text-white transition duration-300">
                        <img src={tukcourse} alt="My Course" className="w-5 h-5 mr-3" />
                        My Course
                    </a>
                    <a href="#" className="flex items-center text-black hover:text-white transition duration-300">
                        <img src={tukchat} alt="Chat" className="w-5 h-5 mr-3" />
                        Chat
                    </a>
                </div>

                <div className="flex flex-col items-start gap-4 mb-8 ml-4">
                    <a href="#" className="flex items-center text-black hover:text-white transition duration-300">
                        <img src={settings} alt="Settings" className="w-5 h-5 mr-3" />
                        Settings
                    </a>
                    <a href="#" className="flex items-center text-black hover:text-white transition duration-300">
                        <img src={tukhelpcenter} alt="Help Center" className="w-5 h-5 mr-3" />
                        Help Center
                    </a>
                </div>

                <div className="flex flex-col items-start ml-4">
                    <a href="#" className="flex items-center text-black hover:text-white transition duration-300">
                        <img src={logot} alt="Logout" className="w-5 h-5 mr-3" />
                        Logout Account
                    </a>
                </div>
            </div>

            <div
                id="sidebarOverlay"
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 ${isActive ? 'block' : 'hidden'}`}
                onClick={onClose}
            ></div>
        </>
    );
};

export default Sidebar;
