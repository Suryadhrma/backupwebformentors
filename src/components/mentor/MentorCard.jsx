import React from 'react';
import { Users, Star } from 'lucide-react'; // Import icon dari lucide-react

const ClassCard = ({ cls, onClick, showProgressBar = true }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-400">★</span>
        ))}
        {halfStar && <span className="text-yellow-400">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">★</span>
        ))}
      </>
    );
  };

  return (
    <div
      className="w-72 bg-white border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col items-center cursor-pointer relative"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="relative w-full">
        <img
          src={cls.image || "/api/placeholder/400/320"} // Fallback to placeholder if no image is provided
          alt="Class Thumbnail"
          className="w-full h-auto rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4">{cls.title}</h3>
      <p className="text-sm mt-2 mb-12">{cls.welcomeMessage}</p> {/* Ucapan selamat datang */}

      {/* Progress bar container (optional, hidden by default in CourseMentor page) */}
      {showProgressBar && (
        <div className="mt-4 w-full">
          <div className="flex items-center justify-end">
            <span className="text-sm font-medium">1/4 Lessons</span>
          </div>
          <div className="flex items-center w-full mt-2">
            <div className="relative flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${cls.progress}%` }}></div>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">{cls.progress}%</span>
          </div>
        </div>
      )}

      {/* Bottom right section (Jumlah peserta & review in right bottom corner) */}
      <div className="absolute bottom-0 right-4 flex flex-col items-end space-y-2">
        {/* Jumlah Peserta */}
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-gray-500" />
          <p className="text-sm">{cls.participantCount} Peserta</p>
        </div>

        {/* Rating bintang (Review) */}
        <div className="flex items-center space-x-1 mt-1">
          <Star className="w-4 h-4 text-yellow-400" />
          {renderStars(cls.averageRating)} {/* Rata-rata rating dalam bintang */}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
