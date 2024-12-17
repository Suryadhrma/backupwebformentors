import React, { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';

const TopNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => setIsOpen((prevState) => !prevState);

    return (
        <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Header Static */}
                    
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;
