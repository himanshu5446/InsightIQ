import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Upload, FileText, Hash, Calendar, Tag, Sparkles, MessageSquare } from 'lucide-react';

interface DataUploadPageProps {
  onNavigateBack: () => void;
  onNavigateToInsights: () => void;
}

interface Column {
  name: string;
  type: 'text' | 'number' | 'date' | 'category';
  sample: string;
}

const sampleData: Column[] = [
  { name: 'customer_id', type: 'number', sample: '12345' },
  { name: 'name', type: 'text', sample: 'John Doe' },
  { name: 'email', type: 'text', sample: 'john@example.com' },
  { name: 'registration_date', type: 'date', sample: '2023-01-15' },
  { name: 'subscription_type', type: 'category', sample: 'Premium' },
  { name: 'monthly_spend', type: 'number', sample: '$149.99' },
  { name: 'last_login', type: 'date', sample: '2024-01-28' },
  { name: 'status', type: 'category', sample: 'Active' },
];

const previewData = [
  { customer_id: '12345', name: 'John Doe', email: 'john@example.com', registration_date: '2023-01-15', subscription_type: 'Premium', monthly_spend: '$149.99', last_login: '2024-01-28', status: 'Active' },
  { customer_id: '12346', name: 'Jane Smith', email: 'jane@example.com', registration_date: '2023-02-20', subscription_type: 'Basic', monthly_spend: '$49.99', last_login: '2024-01-27', status: 'Active' },
  { customer_id: '12347', name: 'Mike Johnson', email: 'mike@example.com', registration_date: '2023-03-10', subscription_type: 'Premium', monthly_spend: '$149.99', last_login: '2024-01-26', status: 'Inactive' },
  { customer_id: '12348', name: 'Sarah Wilson', email: 'sarah@example.com', registration_date: '2023-04-05', subscription_type: 'Enterprise', monthly_spend: '$299.99', last_login: '2024-01-29', status: 'Active' },
  { customer_id: '12349', name: 'David Brown', email: 'david@example.com', registration_date: '2023-05-12', subscription_type: 'Basic', monthly_spend: '$49.99', last_login: '2024-01-25', status: 'Active' },
];

const suggestedQuestions = [
  "What's the average monthly spend by subscription type?",
  "How many customers joined each month?",
  "Which customers haven't logged in recently?",
  "What's the distribution of subscription types?",
  "Show me the top spending customers",
];

export function DataUploadPage({ onNavigateBack, onNavigateToInsights }: DataUploadPageProps) {
  const [dragActive, setDragActive] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [columns, setColumns] = useState<Column[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    // Simulate file processing
    setTimeout(() => {
      setHasData(true);
      setColumns(sampleData);
    }, 1000);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Simulate file processing
      setTimeout(() => {
        setHasData(true);
        setColumns(sampleData);
      }, 1000);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'number':
        return <Hash className="w-4 h-4" />;
      case 'date':
        return <Calendar className="w-4 h-4" />;
      case 'category':
        return <Tag className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'number':
        return 'bg-blue-100 text-blue-800';
      case 'date':
        return 'bg-green-100 text-green-800';
      case 'category':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
              <h1 className="text-xl font-semibold text-gray-900">Data Upload & Schema Preview</h1>
            </div>
            {hasData && (
              <Button 
                onClick={onNavigateToInsights}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Insights
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Upload Area */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Drag and drop your file here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse your files
                  </p>
                  <input
                    type="file"
                    accept=".csv,.xlsx,.json"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
                  >
                    Choose File
                  </label>
                  <p className="text-sm text-gray-500 mt-4">
                    Supports CSV, Excel, and JSON files up to 10MB
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Questions */}
            {hasData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Suggested Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {suggestedQuestions.map((question, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                      >
                        <p className="text-sm text-gray-700">{question}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            {hasData ? (
              <>
                {/* Schema Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Schema Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {columns.map((column, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(column.type)}
                              <span className="font-medium text-gray-900">{column.name}</span>
                            </div>
                          </div>
                          <Badge className={getTypeColor(column.type)}>
                            {column.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Data Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Data Preview (First 5 rows)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            {columns.map((column, index) => (
                              <TableHead key={index} className="font-medium">
                                {column.name}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {previewData.map((row, index) => (
                            <TableRow key={index}>
                              {columns.map((column, colIndex) => (
                                <TableCell key={colIndex} className="text-sm">
                                  {row[column.name as keyof typeof row]}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No data uploaded yet
                    </h3>
                    <p className="text-gray-600">
                      Upload a file to see the preview and schema detection
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}