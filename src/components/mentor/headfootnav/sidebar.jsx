import React from 'react';
import logorusa from '../../../assets/logorusa.png';
import profile from '../../../assets/profile.jpg';
import rumahan from '../../../assets/rumahan.png';
import tukcourse from '../../../assets/tukcourse.png';
import tukchat from '../../../assets/tukchat.png';
import settings from '../../../assets/Settings.png';
import tukhelpcenter from '../../../assets/tukhelpcenter.png';
import logot from '../../../assets/tuklogot.png';


const Sidebar = ({ isActive, onClose }) => {
    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${
                    isActive ? 'translate-x-0' : '-translate-x-full'
                } w-64 z-50`}
            >
                <div className="flex flex-col h-full p-5 space-y-5">
                    <img src={logorusa} alt="Logo" className="w-32 h-32 mx-auto" />

                    {/* Profile Section */}
                    <div className="flex items-center space-x-3 border-b pb-4">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-bold text-gray-800">Nama Pengguna</p>
                            <p className="text-sm text-gray-500">email@example.com</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-3">
                        <a
                            href="#"
                            className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
                        >
                            <img src={rumahan} alt="Home" className="w-5 h-5" />
                            <span>Dashboard</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
                        >
                            <img src={tukcourse} alt="My Course" className="w-5 h-5" />
                            <span>My Course</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
                        >
                            <img src={tukchat} alt="Chat" className="w-5 h-5" />
                            <span>Chat</span>
                        </a>
                    </nav>

                    {/* Settings Section */}
                    <div className="space-y-3 border-t pt-4">
                        <a
                            href="#"
                            className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
                        >
                            <img src={settings} alt="Settings" className="w-5 h-5" />
                            <span>Settings</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
                        >
                            <img src={tukhelpcenter} alt="Help Center" className="w-5 h-5" />
                            <span>Help Center</span>
                        </a>
                    </div>

                    {/* Logout Section */}
                    <div className="border-t pt-4">
                        <a
                            href="#"
                            className="flex items-center space-x-3 text-red-500 hover:text-red-700"
                        >
                            <img src={logot} alt="Logout" className="w-5 h-5" />
                            <span>Logout</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
                    isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={onClose}
            ></div>
        </>
    );
};

export default Sidebar;
