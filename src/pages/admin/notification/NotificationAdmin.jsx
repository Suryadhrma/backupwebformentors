import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const NotificationsGenerator = () => {
  const [notificationsTitle, setNotificationsTitle] = useState('');
  const [notificationsMessage, setNotificationsMessage] = useState('');

  const generateNotification = () => {
    // Add your logic to generate a notification
    console.log('Notifications Title:', notificationsTitle);
    console.log('Notifications Message:', notificationsMessage);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Generate Notification</h2>
        </header>
        <div className="container mx-auto max-w-full my-12">
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
            <label htmlFor="notifications-title" className="block font-medium mb-2">
                Notifications Title:
            </label>
            <input
                type="text"
                id="notifications-title"
                className="border rounded py-2 px-3 w-full"
                placeholder="Generate Code Here"
                value={notificationsTitle}
                onChange={(e) => setNotificationsTitle(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label htmlFor="notifications-message" className="block font-medium mb-2">
                Notifications Message:
            </label>
            <textarea
                id="notifications-message"
                className="border rounded py-2 px-3 w-full"
                placeholder="Enter Message"
                value={notificationsMessage}
                onChange={(e) => setNotificationsMessage(e.target.value)}
            ></textarea>
            </div>

            <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded w-full"
            onClick={generateNotification}
            >
            <span className="flex items-center justify-center">
                Generate
            </span>
            </button>
        </div>
        </div>
    </div>
  );
};

export default NotificationsGenerator;