import React from 'react';
import { AppPath } from '../types';

interface BreadcrumbsProps {
  path: AppPath[];
  onNavigate: (path: AppPath) => void;
}

const pathLabels: Record<AppPath, string> = {
  CBSE_SECTION: 'CBSE Section',
  CLASS_10: 'Class 10',
  BIOLOGY_CONTENT: 'Biology',
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, onNavigate }) => {
  if (path.length <= 1) return null;

  return (
    <nav className="text-sm font-medium text-gray-500 px-4 sm:px-6 md:px-8 py-3 bg-gray-50 border-b border-gray-200">
      <ol className="list-none p-0 inline-flex flex-wrap items-center">
        {path.map((item, index) => (
          <li key={item} className="flex items-center">
            {index > 0 && (
              <svg
                className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .228.114-8 16-.228-.114z" />
              </svg>
            )}
            {index < path.length - 1 ? (
              <button
                onClick={() => onNavigate(item)}
                className="text-indigo-600 hover:text-indigo-800 focus:outline-none focus:underline"
              >
                {pathLabels[item]}
              </button>
            ) : (
              <span className="text-gray-700">{pathLabels[item]}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
