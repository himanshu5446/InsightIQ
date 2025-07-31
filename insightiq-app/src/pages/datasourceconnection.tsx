import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components//ui/badge';
import { 
  ArrowLeft, 
  Database, 
  Brain, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Server,
  Cloud,
  FileText,
  BarChart3
} from 'lucide-react';

interface DataSourceConnectionProps {
  onNavigateBack: () => void;
  onComplete: () => void;
}

interface DataSource {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  status: 'available' | 'popular' | 'enterprise';
}

export function DataSourceConnection({ onNavigateBack, onComplete }: DataSourceConnectionProps) {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStep, setConnectionStep] = useState<'select' | 'configure' | 'test' | 'complete'>('select');

  const dataSources: DataSource[] = [
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      type: 'Database',
      icon: <Database className="w-6 h-6" />,
      description: 'Connect to PostgreSQL database',
      status: 'popular'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      type: 'Database', 
      icon: <Database className="w-6 h-6" />,
      description: 'Connect to MySQL database',
      status: 'popular'
    },
    {
      id: 'bigquery',
      name: 'Google BigQuery',
      type: 'Cloud',
      icon: <Cloud className="w-6 h-6" />,
      description: 'Connect to Google BigQuery',
      status: 'enterprise'
    },
    {
      id: 'snowflake',
      name: 'Snowflake',
      type: 'Cloud',
      icon: <Cloud className="w-6 h-6" />,
      description: 'Connect to Snowflake data warehouse',
      status: 'enterprise'
    },
    {
      id: 'redshift',
      name: 'Amazon Redshift',
      type: 'Cloud',
      icon: <Cloud className="w-6 h-6" />,
      description: 'Connect to Amazon Redshift',
      status: 'available'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      type: 'Database',
      icon: <Database className="w-6 h-6" />,
      description: 'Connect to MongoDB database',
      status: 'available'
    },
    {
      id: 'csv',
      name: 'CSV File',
      type: 'File',
      icon: <FileText className="w-6 h-6" />,
      description: 'Upload CSV files',
      status: 'popular'
    },
    {
      id: 'api',
      name: 'REST API',
      type: 'API',
      icon: <Server className="w-6 h-6" />,
      description: 'Connect to REST API endpoints',
      status: 'available'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'popular': return 'bg-green-100 text-green-800';
      case 'enterprise': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    setConnectionStep('configure');
    
    // Simulate connection process
    setTimeout(() => {
      setConnectionStep('test');
      setTimeout(() => {
        setConnectionStep('complete');
        setIsConnecting(false);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }, 1000);
    }, 1000);
  };

  const selectedSourceData = dataSources.find(source => source.id === selectedSource);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={onNavigateBack}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">InsightIQ</h1>
                <p className="text-sm text-gray-500">Data Source Connection</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          {connectionStep === 'select' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">Connect Your Data Source</h2>
                <p className="text-gray-600">Choose a data source to connect to InsightIQ</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataSources.map((source) => (
                  <Card 
                    key={source.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedSource === source.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
                    }`}
                    onClick={() => setSelectedSource(source.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            {source.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{source.name}</h3>
                            <p className="text-sm text-gray-500">{source.type}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className={getStatusColor(source.status)}>
                          {source.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{source.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedSource && (
                <div className="flex justify-center">
                  <Button 
                    onClick={handleConnect}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                  >
                    Connect to {selectedSourceData?.name}
                  </Button>
                </div>
              )}
            </div>
          )}

          {connectionStep === 'configure' && selectedSourceData && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">Configure Connection</h2>
                <p className="text-gray-600">Set up your {selectedSourceData.name} connection</p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {selectedSourceData.icon}
                    <span>{selectedSourceData.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="host">Host</Label>
                    <Input id="host" placeholder="localhost" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="port">Port</Label>
                    <Input id="port" placeholder="5432" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="database">Database</Label>
                    <Input id="database" placeholder="mydb" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="password" />
                  </div>
                  <div className="flex items-center justify-center pt-4">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {connectionStep === 'test' && selectedSourceData && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">Testing Connection</h2>
                <p className="text-gray-600">Verifying connection to {selectedSourceData.name}</p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Testing connection...</h3>
                      <p className="text-sm text-gray-600">This may take a few moments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {connectionStep === 'complete' && selectedSourceData && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">Connection Successful!</h2>
                <p className="text-gray-600">Your {selectedSourceData.name} is now connected</p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ready to analyze!</h3>
                      <p className="text-sm text-gray-600">Redirecting to insights...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}