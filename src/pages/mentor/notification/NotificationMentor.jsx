import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NotificationsMentor = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const DropdownSection = ({ title, isOpen, setIsOpen }) => (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white border-b border-gray-200"
      >
        <span className="text-gray-700 text-sm">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-b border-gray-200">
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">Option 1</li>
            <li className="text-sm text-gray-600">Option 2</li>
            <li className="text-sm text-gray-600">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen">
        {/* Header */}
      <header className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-bold">Notification</h2>
      </header>
      <div className="p-4">        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <DropdownSection 
            title="Pilih Course yang ingin kamu iklankan"
            isOpen={isOpen1}
            setIsOpen={setIsOpen1}
          />
          
          <DropdownSection 
            title="Pilih Berapa lama kamu iklankan"
            isOpen={isOpen2}
            setIsOpen={setIsOpen2}
          />
          
          <DropdownSection 
            title="Pilih Berapa lama kamu iklankan"
            isOpen={isOpen3}
            setIsOpen={setIsOpen3}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsMentor;