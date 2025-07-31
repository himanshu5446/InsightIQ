// import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
//import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  ArrowLeft, 
  Brain, 
//   BarChart3, 
//   Target, 
//   TrendingUp, 
  Users, 
 // Calendar,
 // Clock,
  Star,
  Plus,
  Search,
  Bell,
  Settings,
//   ChevronRight,
//   PieChart,
  Database,
  //FileText,
  User,
//   Eye,
//   Edit3,
//   Share2
} from 'lucide-react';
// import { WorkspaceNotebook } from './WorkspaceNotebook';
// import { ProjectContext } from '../App';

interface WorkspaceDashboardProps {
  onNavigateBack: () => void;
//   onOpenProject: (project: ProjectContext) => void;
//   projects: ProjectContext[];
//   onCreateProject: (projectData: Partial<ProjectContext>) => void;
}

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export function WorkspaceDashboard({ onNavigateBack}: WorkspaceDashboardProps) {
//   const [selectedProject, setSelectedProject] = useState<string | null>(null);
  //const [activeSection, setActiveSection] = useState<'dashboard' | 'notebook'>('dashboard');

  // Helper functions defined early
//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case 'analysis': return <BarChart3 className="w-4 h-4" />;
//       case 'campaign': return <TrendingUp className="w-4 h-4" />;
//       case 'forecasting': return <PieChart className="w-4 h-4" />;
//       case 'testing': return <Target className="w-4 h-4" />;
//       default: return <FileText className="w-4 h-4" />;
//     }
//   };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Convert project context to display format
//   const displayProjects = projects.map(project => ({
//     ...project,
//     status: project.insights?.length ? 'active' : 'draft' as 'active' | 'completed' | 'draft',
//     lastModified: '2 hours ago', // In real app, this would be calculated
//     icon: getTypeIcon(project.type)
//   }));

  const recentActivity: ActivityItem[] = [
    {
      id: '1',
      user: 'Alice Zhang',
      action: 'commented on',
      target: 'Customer Churn Analysis',
      time: '2h ago',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '2', 
      user: 'Marcus Williams',
      action: 'shared',
      target: 'Marketing Campaign ROI',
      time: '4h ago',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '3',
      user: 'Sophie Rodriguez',
      action: 'created a new notebook',
      target: 'User Behavior Analysis',
      time: '1d ago',
      avatar: '/api/placeholder/32/32'
    }
  ];

//   if (selectedProject) {
//     return (
//       <WorkspaceNotebook 
//         projectId={selectedProject}
//         projectName={projects.find(p => p.id === selectedProject)?.name || 'Project'}
//         onNavigateBack={() => setSelectedProject(null)}
//       />
//     );
//   }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={onNavigateBack}
              className="text-gray-600 hover:text-gray-900 p-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Personal Workspace</h2>
              <p className="text-sm text-gray-500">Manage your dashboards and projects</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 border-b border-gray-200">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <Database className="w-4 h-4 mr-2" />
              Data
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              <Users className="w-4 h-4 mr-2" />
              Segments
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              <Star className="w-4 h-4 mr-2" />
              Tags
            </Button>
          </div>
        </div>

        {/* Projects */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Projects</h3>
            <Button 
              variant="ghost" 
              size="sm"
            //   onClick={() => onCreateProject({
            //     name: 'New Analysis Project',
            //     type: 'analysis',
            //     description: 'New project created from workspace sidebar'
            //   })}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          
          {/* <ScrollArea className="h-80">
            <div className="space-y-2">
              { displayProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="cursor-pointer hover:shadow-sm transition-shadow"
                  onClick={() => onOpenProject(project)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {project.icon}
                        <h4 className="font-medium text-sm text-gray-900">{project.name}</h4>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{project.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {project.lastModified}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {project.collaborators}
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea> */}
        </div>

        {/* Recent Activity */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                    <User className="w-3 h-3" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}{' '}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Workspace Dashboard</h1>
              <p className="text-sm text-gray-500">Overview of your data analysis projects</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Stats Cards */}
            <Card>
              {/* <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Projects</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {displayProjects.filter(p => p.status === 'active').length}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </CardContent> */}
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Team Members</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Data Sources</p>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <Card>
            {/* <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>All Projects</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onCreateProject({
                    name: 'New Analysis Project',
                    type: 'analysis',
                    description: 'New project created from workspace'
                  })}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayProjects.map((project) => (
                  <Card 
                    key={project.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => onOpenProject(project)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {project.icon}
                          <h3 className="font-medium text-gray-900">{project.name}</h3>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.lastModified}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {project.collaborators}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Edit3 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Share2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent> */}
          </Card>
        </div>
      </div>
    </div>
  );
}