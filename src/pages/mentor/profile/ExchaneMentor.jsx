import React from 'react';
import { ChevronRight, Coins, Banknote } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ExchangeMentor = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="p-6">
      {/* Header tetap di atas */}
      <header className="mb-8 mt-8">
        <h2 className="text-3xl font-bold">Exchange</h2>
      </header>

      {/* Konten di tengah halaman */}
      <div className="flex justify-center h-[calc(100vh-160px)]"> 
        <div className="space-y-4 max-w-md w-full">
          {/* CoinMe Button */}
          <div
            onClick={() => navigate('/mentor/coinme')} // Navigate to /coinme
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-200"
          >
            <div className="flex items-center">
              <div className="mr-2">
              <Coins color="#a39600" />
              </div>
              <span className="font-medium">CoinMe</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-2xl mr-2">500</span>
              <ChevronRight size={20} className="text-gray-500" />
            </div>
          </div>

          {/* MoneyMe Button */}
          <div
            onClick={() => navigate('/mentor/moneyme')} // Navigate to /moneyme
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-200"
          >
            <div className="flex items-center">
              <div className="mr-2">
              <Banknote color="#00a30b" />
              </div>
              <span className="font-medium">MoneyMe</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-2xl mr-2">120,000</span>
              <ChevronRight size={20} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeMentor;
