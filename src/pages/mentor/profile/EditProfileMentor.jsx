import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

const EditProfile = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-6">
        <img
          src="/api/placeholder/200/200"
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="text-gray-700 font-medium">
            Nama Lengkap*
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2"
            value="Namu Lengkap"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-gray-700 font-medium">
            Nomor Telepon*
          </label>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <PhoneCall size={20} className="text-gray-500 mr-2" />
            <input
              type="tel"
              id="phone"
              className="flex-1 bg-transparent border-0 focus:ring-0"
              value="+6281234567890"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-gray-700 font-medium">
            E-mail*
          </label>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <Mail size={20} className="text-gray-500 mr-2" />
            <input
              type="email"
              id="email"
              className="flex-1 bg-transparent border-0 focus:ring-0"
              value="user@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="role" className="text-gray-700 font-medium">
            Role*
          </label>
          <input
            type="text"
            id="role"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mt-2"
            value="Developer, Fotografer, Editor"
          />
        </div>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 w-full">
        Simpan
      </button>
    </div>
  );
};

export default EditProfile;