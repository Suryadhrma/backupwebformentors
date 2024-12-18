import React, { useState } from 'react';
import { PhoneCall, Mail } from 'lucide-react';

const EditProfileMentor = () => {
  const [profileData, setProfileData] = useState({
    name: 'Nama Lengkap',
    phone: '+6281234567890',
    email: 'user@example.com',
    role: 'Developer, Fotografer, Editor',
    profilePic: '/api/placeholder/200/200',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData({ ...profileData, [id]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData({ ...profileData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full mx-auto">
      <header className="flex flex-col items-start mb-8 mt-8">
        <h2 className="text-3xl font-bold">Edit Profile</h2>
      </header>
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6 relative">
          <img
            src={profileData.profilePic}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover cursor-pointer"
            onClick={() => document.getElementById('profile-pic-upload').click()}
          />
          <input
            type="file"
            id="profile-pic-upload"
            className="hidden"
            accept="image/*"
            onChange={handleProfilePicChange}
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
              value={profileData.name}
              onChange={handleChange}
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
                value={profileData.phone}
                onChange={handleChange}
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
                value={profileData.email}
                onChange={handleChange}
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
              value={profileData.role}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 w-full">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default EditProfileMentor;
