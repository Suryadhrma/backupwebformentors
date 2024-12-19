import React from 'react';
import { Users, Star } from 'lucide-react'; // Import icon dari lucide-react

const ClassCard = ({ cls, onClick, showProgressBar = true, isMyActivity = false }) => {
  // Function to render stars for the rating
  const renderStars = (rating) => {
    if (isNaN(rating) || rating < 0 || rating > 5) {
      rating = 0;
    }

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
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
          src={cls.image || "/api/placeholder/400/320"}
          alt="Class Thumbnail"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="text-start item-start justify-start">
        <h3 className="text-xl font-semibold mt-4">{cls.title}</h3> {/* Class Title */}
        
        {/* Change the text based on whether it's "My Activity" or "My Course" */}
        <p className="text-sm mt-2 mb-12">
          {isMyActivity ? `Nama Trainer: ${cls.traineeName}` : `Ucapan Selamat Datang di ${cls.title}`}
        </p> {/* Trainer Name or Welcome Message */}
      </div>

      {/* Progress bar */}
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

      {/* Hide participant count and rating if "My Activity" */}
      {!isMyActivity && (
        <div className="absolute bottom-0 right-4 flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-gray-500" />
            <p className="text-sm">{cls.participantCount} Peserta</p>
          </div>

          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-yellow-400" />
            {renderStars(cls.averageRating)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassCard;
