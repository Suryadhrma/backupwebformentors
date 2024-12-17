import React from 'react';
import createadbutton from '../../../assets/createadbutton.png';
import backgroundcoin from '../../../assets/backgroundcoin.png';
import coin from '../../../assetsassets/coin.png';
import addsquare from '../../../assets/add-square.png';
import notif from '../../../assets/notification-bing.png';

const Header = ({ onMenuToggle }) => {
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow-md px-5 py-3 z-50">
            <div className="flex items-center">
                <div className="cursor-pointer flex flex-col space-y-1" onClick={onMenuToggle}>
                    <div className="w-6 h-[2px] bg-black"></div>
                    <div className="w-6 h-[2px] bg-black"></div>
                    <div className="w-6 h-[2px] bg-black"></div>
                </div>
                <input
                    type="text"
                    className="ml-5 w-48 bg-gray-100 border border-gray-300 rounded-md px-4 py-1 text-sm focus:w-64 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
                    placeholder="Search..."
                />
            </div>

            <div className="flex items-center space-x-4">
                <button>
                    <img src={createadbutton} alt="Create Ad" className="w-8 h-8" />
                </button>
                <button>
                    <img src={backgroundcoin} alt="Coin Background" className="w-8 h-8" />
                </button>
                <div className="relative flex items-center">
                    <img src={coin} alt="Coin" className="w-8 h-8" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                        0
                    </span>
                </div>
                <button>
                    <img src={addsquare} alt="Add" className="w-8 h-8" />
                </button>
                <button>
                    <img src={notif} alt="Notifications" className="w-8 h-8" />
                </button>
            </div>
        </header>
    );
};

export default Header;
