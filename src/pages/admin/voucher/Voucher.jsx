import React, { useState } from 'react';
import { Calendar, Copy, Edit, Trash2 } from 'lucide-react';

const VoucherGenerator = () => {
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [maxClaims, setMaxClaims] = useState('');
  const [generatedVoucher, setGeneratedVoucher] = useState([]);
  
  const generateVoucherCode = () => {
    // Logic to generate a unique voucher code (e.g., random alphanumeric)
    const code = 'ABC' + Math.floor(Math.random() * 1000);
    setVoucherCode(code);
  };

  const handleGenerateVoucher = () => {
    if (!discount || !expiryDate || !maxClaims) {
      alert('Please fill in all fields before generating the voucher.');
      return;
    }

    const voucher = {
      code: voucherCode || 'ABC123', // If no code is generated, default to ABC123
      discount,
      expiryDate,
      maxClaims,
    };

    setGeneratedVoucher([...generatedVoucher, voucher]);

    // Clear the fields after generation
    setVoucherCode('');
    setDiscount('');
    setExpiryDate('');
    setMaxClaims('');
  };

  const handleEditVoucher = (index) => {
    const voucherToEdit = generatedVoucher[index];
    setVoucherCode(voucherToEdit.code);
    setDiscount(voucherToEdit.discount);
    setExpiryDate(voucherToEdit.expiryDate);
    setMaxClaims(voucherToEdit.maxClaims);

    // Remove the voucher being edited (optional, to prevent it from being shown again)
    const updatedVouchers = generatedVoucher.filter((_, i) => i !== index);
    setGeneratedVoucher(updatedVouchers);
  };

  const handleDeleteVoucher = (index) => {
    const updatedVouchers = generatedVoucher.filter((_, i) => i !== index);
    setGeneratedVoucher(updatedVouchers);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Generate Voucher</h2>
      </header>

      {/* Content */}
      <div className="container mx-auto max-w-full my-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="voucher-code" className="block font-medium mb-2">
              Voucher Code:
            </label>
            <div className="relative">
              <input
                type="text"
                id="voucher-code"
                className="border rounded py-2 px-3 w-full pr-8"
                placeholder="Generate Code Here"
                value={voucherCode}
                readOnly
              />
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={generateVoucherCode}
              >
                <Copy size={20} />
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="discount" className="block font-medium mb-2">
              Discount Percentage:
            </label>
            <input
              type="text"
              id="discount"
              className="border rounded py-2 px-3 w-full"
              placeholder="Enter Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expiry-date" className="block font-medium mb-2">
              Expiry Date:
            </label>
            <div className="relative">
              <input
                type="date"
                id="expiry-date"
                className="border rounded py-2 px-3 w-full"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="max-claims" className="block font-medium mb-2">
              Maximum Claims:
            </label>
            <input
              type="text"
              id="max-claims"
              className="border rounded py-2 px-3 w-full"
              placeholder="Enter Maximum"
              value={maxClaims}
              onChange={(e) => setMaxClaims(e.target.value)}
            />
          </div>

          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded w-full"
            onClick={handleGenerateVoucher}
          >
            Generate
          </button>
        </div>

        {/* Voucher Table */}
        {generatedVoucher.length > 0 && (
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Code</th>
                  <th className="px-4 py-2 text-left font-medium">Discount</th>
                  <th className="px-4 py-2 text-left font-medium">Expire</th>
                  <th className="px-4 py-2 text-left font-medium">Max Claims</th>
                  <th className="px-4 py-2 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {generatedVoucher.map((voucher, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{voucher.code}</td>
                    <td className="px-4 py-2">{voucher.discount}%</td>
                    <td className="px-4 py-2">{voucher.expiryDate}</td>
                    <td className="px-4 py-2">{voucher.maxClaims}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEditVoucher(index)}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteVoucher(index)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoucherGenerator;
