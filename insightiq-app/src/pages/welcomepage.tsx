

import React from 'react';
import { Button } from '@/components/ui/button';
import {Brain, BarChart3, Sparkles, ArrowRight, Database, Upload, FolderOpen } from 'lucide-react'

interface WelcomePageProps {
  onNavigateToUpload: () => void;
  onNavigateToDataSource: () => void;
  onNavigateToWorkspace: () => void;
}

export function WelcomePage({ onNavigateToUpload,onNavigateToWorkspace, onNavigateToDataSource }: WelcomePageProps) {

    return (
      <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-semibold text-gray-900">InsightIQ</span>
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  From Data to Decisions.{' '}
                  <span className="text-blue-600">Instantly.</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Unlock powerful insights from your data using natural language queries, collaborative workspaces, and AI-powered analysis.
                </p>
              </div>

              {/* Main Action Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                   onClick={onNavigateToWorkspace}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    <FolderOpen className="w-5 h-5 mr-2" />
                    Open Workspace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    onClick={onNavigateToDataSource}
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg"
                  >
                    <Database className="w-5 h-5 mr-2" />
                    Connect Data Source
                  </Button>
                </div>
                
                {/* Secondary Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Button 
                    onClick={onNavigateToUpload}
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-2"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload CSV File
                  </Button>
                  <Button 
                    variant="ghost"
                    //onClick={handleTrySample}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-2"
                  >
                    Try Sample Dataset →
                  </Button>
                </div>
              </div>

              {/* Data Source Options Preview */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Supported Data Sources</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Database className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-600">PostgreSQL</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Database className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-600">MySQL</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-600">BigQuery</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-600">& More</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Natural Language</h3>
                    <p className="text-sm text-gray-600">Ask questions in plain English</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Insights</h3>
                    <p className="text-sm text-gray-600">Auto-generated analysis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-96">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto opacity-20"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-48 mx-auto opacity-60"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-32 mx-auto opacity-40"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-40 mx-auto opacity-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div>InsightIQ v1.0.0</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}