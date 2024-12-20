import React, { useState } from 'react';
import { Landmark, CreditCard, SwitchCamera } from 'lucide-react';
import AddBankModal from '../../../../components/mentor/AddBankMentor'; // Import the AddBankModal component

const MoneyMeDetailMentor = () => {
  const [selectedBank, setSelectedBank] = useState('');
  
  // List of bank accounts
  const [bankAccounts, setBankAccounts] = useState([
    { name: 'Bank A', icon: <CreditCard size={20} className="text-blue-500" /> },
    { name: 'Bank B', icon: <CreditCard size={20} className="text-green-500" /> },
    { name: 'Bank C', icon: <CreditCard size={20} className="text-yellow-500" /> },
  ]);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle adding a new bank
  const handleAddBank = (newBankName, newAccountNumber, newAccountHolder) => {
    setBankAccounts([
      ...bankAccounts,
      { 
        name: newBankName, 
        accountNumber: newAccountNumber, 
        accountHolder: newAccountHolder,
        icon: <CreditCard size={20} className="text-gray-500" />
      }
    ]);
  };

  // MoneyMe balance and exchange rate state
  const [moneyMeBalance, setMoneyMeBalance] = useState(200.000); // Example MoneyMe balance
  const [exchangeRate, setExchangeRate] = useState(1.5); // Example exchange rate (MoneyMe to local currency)

  return (
    <div className="p-6">
      {/* Header */}
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">MoneyMe</h2>
      </header>

      {/* Bank Accounts Dropdown */}
      <div className="max-w-xs p-4 mb-6">
        <h5 className="text-sm font-semibold mb-3">Pilih Rekening Perbankan</h5>
        <div className="relative flex items-center justify-between">
          {/* Dropdown for selecting bank */}
          <Landmark className="mr-2" />
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-3/4 appearance-none pr-10 text-sm"
          >
            <option value="" disabled>Pilih Bank</option>
            {bankAccounts.map((bank, index) => (
              <option key={index} value={bank.name}>
                <div className="flex items-center">
                  {bank.icon}
                  <span className="ml-4 text-sm">{bank.name}</span>
                </div>
              </option>
            ))}
          </select>

          {/* Button to open the modal */}
          <button
            onClick={openModal}
            className="ml-2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm"
          >
            Tambah
          </button>
        </div>
      </div>

      {/* Add Bank Modal */}
      <AddBankModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        addBank={handleAddBank} 
      />

      {/* MoneyMe Balance Container */}
        <div className="bg-white text-center max-w-md p-4 rounded-lg border border-gray-300 mx-auto mb-6">
            <h5 className="text-sm font-semibold mb-3">Jumlah MoneyMe Tersedia</h5>
            <div className="flex items-center justify-center">
                <span className="text-lg font-bold">{moneyMeBalance} MoneyMe</span>
            </div>
        </div>

        {/* Add the SwitchCamera Icon Between MoneyMe and IDR */}
        <div className="flex items-center justify-center mb-6">
            <SwitchCamera size={24} className="text-gray-500" />
        </div>

        {/* Exchange Rate Container */}
        <div className="bg-white text-center max-w-md p-4 rounded-lg border border-gray-300 mx-auto">
            <h5 className="text-sm font-semibold mb-3">Nilai Tukar MoneyMe</h5>
            <div className="flex items-center justify-center">
                <span className="text-lg font-bold">{moneyMeBalance * exchangeRate} IDR</span>
            </div>
        </div>

        {/* Available Balance and Withdraw Button */}
        <div className="text-center max-w-md p-4 rounded-lg mb-6 mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-sm font-semibold">Saldo Tersedia: {moneyMeBalance} MoneyMe</span>
                </div>
                <button 
                    onClick={() => alert('Tarik Semua MoneyMe')} 
                    className="underline text-black px-4 py-2 rounded-lg text-md"
                    >
                    Tarik Semua
                </button>
            </div>
        </div>
        <button
            onClick={() => alert('Tarik Semua MoneyMe')} 
           className="bg-[#339989] text-white px-4 py-2 rounded-lg mt-4 w-md flex items-center justify-center space-x-2 mx-auto"
            >
            <SwitchCamera size={20} className="text-white" /> {/* Camera icon */}
            <span>Tarik MoneyMe</span> {/* Text */}
         </button>
    </div>
  );
};

export default MoneyMeDetailMentor;
