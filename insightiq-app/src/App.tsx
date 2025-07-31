import React, { useState } from 'react'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import { WelcomePage } from './pages/welcomepage'
import { DataUploadPage } from './pages/datauploadpage'
import { WorkspaceDashboard } from './pages/workspacedashboard'
import { DataSourceConnection } from './pages/datasourceconnection'
// import Modal from './components/ui/Modal'

export default function App() {
    const [currentPage, setCurrentPage] = useState<'welcome' | 'upload' | 'insights' | 'chat' | 'story' | 'workspace' | 'datasource' | 'querycraft'>('welcome');

// Add console logs to track navigation
  const handleNavigateToPage = (page: 'welcome' | 'workspace' | 'upload' | 'insights' | 'chat' | 'story' | 'datasource' | 'querycraft') => {
    console.log(`Navigating to: ${page}`);
    setCurrentPage(page);
  };
  return (
     <div className="min-h-screen bg-gray-50">
      {/* Debug: Show current page */}
      <div className="fixed top-4 right-4 z-50 bg-black text-white px-2 py-1 rounded text-xs">
        Current: {currentPage}
      </div>
       {currentPage === 'welcome' && (<WelcomePage 
       onNavigateToWorkspace={() => handleNavigateToPage('workspace')}
          onNavigateToUpload={() => handleNavigateToPage('upload')}
          onNavigateToDataSource={() => handleNavigateToPage('datasource')}/>)}
        {currentPage === 'upload' && (<DataUploadPage 
          onNavigateBack={() => handleNavigateToPage('welcome')}
          onNavigateToInsights={() => handleNavigateToPage('insights')}/>)}
           {currentPage === 'workspace' && (
            <WorkspaceDashboard 
              onNavigateBack={() => handleNavigateToPage('welcome')}
              // onOpenProject={handleOpenProjectInInsights}
              // projects={workspaceProjects}
              // onCreateProject={handleCreateNewProject}
            />
      )}
       {currentPage === 'datasource' && (
        <DataSourceConnection 
          onNavigateBack={() => handleNavigateToPage('welcome')}
          onComplete={() => handleNavigateToPage('insights')}
        />
      )}
      </div>
  );
}