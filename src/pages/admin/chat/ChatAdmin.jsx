import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

const chatList = [
  {
    id: 1,
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/50',
    lastMessage: 'How are you?',
    time: '12:30',
    messages: [
      { id: 1, text: 'Hey, what\'s up?', sender: 'John Doe', time: '12:30' },
      { id: 2, text: 'How are you?', sender: 'John Doe', time: '12:32' }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePic: 'https://via.placeholder.com/50',
    lastMessage: 'Let\'s meet up tomorrow!',
    time: '11:45',
    messages: [
      { id: 1, text: 'Let\'s meet up tomorrow!', sender: 'Jane Smith', time: '11:45' },
      { id: 2, text: 'Sounds good!', sender: 'You', time: '11:47' }
    ]
  }
];

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(chatList[0]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSendMessage = () => {
    if (message.trim() !== '' || selectedFile) {
      const newMessage = {
        id: selectedChat.messages.length + 1,
        text: message,
        sender: 'You',
        time: new Date().toLocaleTimeString(),
        file: selectedFile
      };
      
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, newMessage]
      });
      setMessage('');
      setSelectedFile(null);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        alert('File size should not exceed 50MB');
        return;
      }
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col bg-white shadow-xl">
        {/* Message Window */}
        <div className="flex-1 overflow-y-auto px-4 py-3 mb-20">
          {selectedChat.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'} mb-3`}
            >
              {/* Profile Picture */}
              {msg.sender !== 'You' && (
                <div className="mr-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={selectedChat.profilePic}
                    alt={`${msg.sender} Profile`}
                  />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="absolute bottom-0 left-0 w-[calc(100%-300px)] bg-gray-100 border-t">
          <div className="flex items-center px-4 py-3">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* Attachment Button */}
            <label htmlFor="file-upload" className="ml-3 cursor-pointer">
              <Paperclip size={20} className="text-gray-500 hover:text-blue-500" />
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf,.mp4"
            />

            {/* Send Button */}
            <button
              className="text-blue-500 hover:text-blue-700 ml-3"
              onClick={handleSendMessage}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar (Chat List) */}
      <div className="w-[300px] bg-[#a1e3d8] border-l h-screen overflow-y-auto">
        <div className="flex flex-col">
          {/* Chat List */}
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center px-4 py-3 border-b hover:bg-gray-200 cursor-pointer"
              onClick={() => setSelectedChat(chat)}
            >
              <img
                className="w-10 h-10 rounded-full mr-3"
                src={chat.profilePic}
                alt="Profile"
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{chat.name}</h4>
                <p className="text-gray-500 text-xs">{chat.lastMessage}</p>
              </div>
              <span className="text-gray-400 text-xs">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
