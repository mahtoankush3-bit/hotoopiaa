import React from 'react';

interface SectionCardProps {
  title: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
                 w-full sm:w-64 h-32 text-indigo-700 font-semibold text-lg
                 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-75
                 overflow-hidden group"
    >
      {icon && (
        <span className="mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300">
          {icon}
        </span>
      )}
      <span className="truncate">{title}</span>
    </button>
  );
};

export default SectionCard;
