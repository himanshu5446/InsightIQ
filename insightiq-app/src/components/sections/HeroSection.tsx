import React from 'react';
import abstractImage from '@/assets/image.png'

export default function HeroSection() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            From Data to Decisions — 
            <br />
            Instantly.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Transform your analytics workflow with AI-powered insights that 
            drive better business outcomes.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              Get Started Free
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-md font-medium">
              Try Sample Demo
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 rounded-3xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-indigo-100">
            <img 
              src={abstractImage} 
              alt="Abstract visualization" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
          </div>
        </div>
      </div>
    </main>
  )
}