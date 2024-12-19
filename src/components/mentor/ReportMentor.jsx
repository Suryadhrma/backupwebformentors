// components/ReportModal.js
import React, { useState } from 'react';

const ReportMentor = ({ show, onClose, onSubmit }) => {
  const [reportReason, setReportReason] = useState('');
  const [reportDescription, setReportDescription] = useState('');

  const handleReportSubmit = () => {
    onSubmit(reportReason, reportDescription);
    setReportReason('');
    setReportDescription('');
  };

  if (!show) return null; // Don't render the modal if `show` is false

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#27DEBF] p-6 rounded-2xl w-96">
        <h3 className="text-lg text-center font-semibold mb-4">Laporkan Trainee Jika Bermasalah</h3>

        {/* Report reason */}
        <div>
          <label className="block text-sm font-medium mb-2">Pilih Alasan</label>
          <select
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
          >
            <option value="">Pilih alasan</option>
            <option value="Spam">Spam</option>
            <option value="Hate Speech">Hate Speech</option>
            <option value="Harassment">Harassment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Report description */}
        <div>
          <label className="block text-sm font-medium mb-2">Jelaskan Alasan Kamu</label>
          <textarea
            value={reportDescription}
            onChange={(e) => setReportDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
            rows="4"
            placeholder="Jelaskan alasan melaporkan"
          />
        </div>

        {/* Modal buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-6 py-2 rounded-md"
          >
            Batal
          </button>
          <button
            onClick={handleReportSubmit}
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Kirim Laporan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportMentor;
