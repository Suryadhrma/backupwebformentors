import React, { useState } from 'react';
import { ChevronUp, ChevronDown, SwitchCamera } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const CoinMe = () => {
    const navigate = useNavigate();
  const [period, setPeriod] = useState('Q4 2024'); // Default period
  const [income, setIncome] = useState(500); // Default income
  const [expenses, setExpenses] = useState(0); // Default expenses
  const [details, setDetails] = useState([
    { label: 'Konsultasi', value: '25C' },
    { label: 'Aktivitas', value: '10C' },
  ]); // Default details
  const [startDate, setStartDate] = useState(new Date()); // Default date

  // Handle date change and update data based on the selected date
  const handleDateChange = (date) => {
    setStartDate(date);

    // Get the selected month (0 = Jan, 11 = Dec)
    const month = date.getMonth();

    // Update period and data based on the month
    if (month >= 6 && month <= 8) {
      setPeriod('Q3 2024');
      setIncome(300);
      setExpenses(100);
      setDetails([
        { label: 'Konsultasi', value: '15C' },
        { label: 'Aktivitas', value: '5C' },
      ]);
    } else {
      setPeriod('Q4 2024');
      setIncome(500);
      setExpenses(0);
      setDetails([
        { label: 'Konsultasi', value: '25C' },
        { label: 'Aktivitas', value: '10C' },
      ]);
    }
  };

  // Handle Tarik CoinMe button click
  const handleWithdraw = () => {
    navigate('mentor/coinme/detail'); // Placeholder action
  };

  return (
    <div className="bg-white p-6">
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">Coin Me</h2>
      </header>
      <div className="flex justify-center items-center mb-4">
        <div className="flex items-center space-x-2">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="MMMM yyyy" // Display only month and year
            showMonthYearPicker
            className="border p-2 rounded cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-cyan-100 border border-cyan-300 rounded-lg p-4">
          <h3 className="text-gray-700 font-medium">Pemasukan</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-bold">{income}</span>
            <ChevronUp size={20} className="text-green-500" />
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <h3 className="text-gray-700 font-medium">Pengeluaran</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-bold">{expenses === 0 ? '-' : expenses}</span>
            <ChevronDown size={20} className="text-red-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-300 pt-4">
        <div className='mb-6'>
            <span className='font-semibold text-2xl text-[#339989]'>Rincian</span>
        </div>
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 last:mb-0"
          >
            <span className="text-gray-700 font-medium">{detail.label}</span>
            <span className="text-gray-500">{detail.value}</span>
          </div>
        ))}
      </div>
        <button
            className="bg-[#339989] text-white px-4 py-2 rounded-lg mt-4 w-full flex items-center justify-center space-x-2"
            onClick={handleWithdraw}
            >
            <SwitchCamera size={20} className="text-white" /> {/* Camera icon */}
            <span>Tarik CoinMe</span> {/* Text */}
        </button>
    </div>
  );
};

export default CoinMe;
