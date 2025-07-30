import React from 'react';

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function Header({ onLoginClick, onSignupClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">InsightIQ</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={onSignupClick}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}