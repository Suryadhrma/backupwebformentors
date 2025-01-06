import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Coins, TriangleAlert, Menu, X } from 'lucide-react';
import ReportMentor from '../../../components/mentor/ReportMentor'; // Modal laporan
import ReportSuccesMentor from '../../../components/mentor/ReportSuccesMentor'; // Modal sukses

const chatList = [
  {
    id: 1,
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/50',
    lastMessage: 'How are you?',
    time: '12:30',
    isAccepted: false,
    messages: [
      { id: 1, text: "Hey, what's up?", sender: 'John Doe', time: '12:30' },
      { id: 2, text: 'How are you?', sender: 'John Doe', time: '12:32' },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    profilePic: 'https://via.placeholder.com/50',
    lastMessage: "Let's meet up tomorrow!",
    time: '11:45',
    isAccepted: false,
    messages: [
      { id: 1, text: "Let's meet up tomorrow!", sender: 'Jane Smith', time: '11:45' },
      { id: 2, text: 'Sounds good!', sender: 'You', time: '11:47' },
    ],
  },
];

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(chatList[0]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showReportMentor, setShowReportMentor] = useState(false);
  const [showReportSuccess, setShowReportSuccess] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to the bottom when messages update
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat.messages]);

  const handleSendMessage = () => {
    if (message.trim() !== '' || selectedFile) {
      const newMessage = {
        id: selectedChat.messages.length + 1,
        text: message,
        sender: 'You',
        time: new Date().toLocaleTimeString(),
        file: selectedFile,
      };

      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, newMessage],
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

  const handleAcceptChat = (chat) => {
    const updatedChat = { ...chat, isAccepted: true };
    setSelectedChat(updatedChat);
  };

  const handleRejectChat = (chat) => {
    const updatedChat = { ...chat, isAccepted: false };
    setSelectedChat(updatedChat);
  };

  const handleReportSubmit = (reason, description) => {
    setShowReportMentor(false);
    setShowReportSuccess(true);
    console.log(`Report submitted: Reason - ${reason}, Description - ${description}`);
  };

  

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col bg-white shadow-lg relative">
        <div className="flex-1 overflow-y-auto px-4 py-3 pb-16">
          {selectedChat.isAccepted ? (
            selectedChat.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'} mb-3`}
              >
                {msg.sender !== 'You' && (
                  <div className="mr-3">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={selectedChat.profilePic}
                      alt={`${msg.sender} Profile`}
                    />
                  </div>
                )}
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-lg ${
                    msg.sender === 'You'
                      ? 'bg-[#27DEBF] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                  {msg.file && (
                    <div className="mt-2 text-sm text-gray-600">
                      <a
                        href={URL.createObjectURL(msg.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {msg.file.name}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/api/placeholder/200/200"
                alt="Trainee"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-center">
                Hei! {selectedChat.name} Membutuhkanmu
              </h2>
              <button className="flex items-center justify-center bg-green-500 text-white font-bold rounded-md w-24 h-12 mb-4">
                <Coins color="#fff700" className="mr-2" />
                100
              </button>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleRejectChat(selectedChat)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg flex items-center hover:scale-105 transition-transform"
                >
                  Tolak
                </button>
                <button
                  onClick={() => handleAcceptChat(selectedChat)}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center hover:scale-105 transition-transform"
                >
                  Terima
                </button>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        {selectedChat.isAccepted && (
          <div className="flex items-center space-x-3 px-4 py-3 border-t bg-gray-100">
          <button
            onClick={() => setShowReportMentor(true)}
            className="bg-[#27DEBF] p-2 text-black font-semibold rounded-md hover:bg-[#1bc6a7] hidden lg:block"
          >
            Laporkan
          </button>
          <button
            onClick={() => setShowReportMentor(true)}
            className="bg-[#27DEBF] p-2 text-black font-semibold rounded-md hover:bg-[#1bc6a7] lg:hidden"
          >
            <TriangleAlert color="#ff0000" />
          </button>

          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-full bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ketik pesan..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 1024) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />

          <label htmlFor="file-upload" className="cursor-pointer">
            <Paperclip size={20} className="text-gray-500 hover:text-blue-500" />
          </label>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf,.mp4"
          />

          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={handleSendMessage}
          >
            <Send size={20} />
          </button>
        </div>
        )}
      </div>

        {/* Floating Button */}
      <button
        className="fixed top-20 right-4 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex-row-reverse">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative z-40 top-0 right-0 w-[300px] bg-[#a1e3d8] border-l h-full flex-shrink-0 transform transition-transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0 lg:h-full`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {chatList.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center px-4 py-3 border-b hover:bg-gray-200 cursor-pointer ${
                  selectedChat.id === chat.id ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  src={chat.profilePic}
                  alt={`${chat.name}'s Profile`}
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

      {/* Modals */}
      <ReportMentor
        show={showReportMentor}
        onClose={() => setShowReportMentor(false)}
        onSubmit={handleReportSubmit}
      />
      <ReportSuccesMentor
        isOpen={showReportSuccess}
        onClose={() => setShowReportSuccess(false)}
      />
    </div>
  );
};

export default ChatPage;
