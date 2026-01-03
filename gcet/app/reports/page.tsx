'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Search, 
  Download, 
  Calendar, 
  FileText, 
  TrendingUp, 
  DollarSign,
  Users,
  Clock,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import Layout from '@/components/ui/layout';
import { EnterpriseCard, EnterpriseCardHeader, EnterpriseCardTitle, EnterpriseCardContent } from '@/components/ui';
import { ProButton } from '@/components/ui';
import DataTable, { DataTableHeader, DataTableHeaderCell, DataTableBody, DataTableRow, DataTableCell, DataTableEmpty } from '@/components/ui/data-table';
import { StatusBadge } from '@/components/ui';
import { Input } from '@/components/ui';
import { LoadingSpinner } from '@/components/ui';
import { SmartInput } from '@/components/ui/smart-input';
import { useToastListener } from '@/hooks/useToastListener';

interface Report {
  id: string;
  name: string;
  type: 'attendance' | 'payroll' | 'leave' | 'performance' | 'custom';
  description: string;
  generatedDate: string;
  fileSize: string;
  downloadUrl: string;
  status: 'ready' | 'generating' | 'failed';
}

export default function ReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  // Initialize toast listener
  useToastListener();

  const fetchReports = async () => {
    try {
      const response = await fetch('/api/reports');
      if (response.ok) {
        const data = await response.json();
        setReports(data);
      }
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleDownload = async (reportId: string) => {
    setActionLoading(reportId);
    try {
      // Simulate download
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Downloading report ${reportId}`);
    } catch (error) {
      console.error('Failed to download report:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleGenerateReport = async (type: string) => {
    try {
      // Simulate report generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      fetchReports();
    } catch (error) {
      console.error('Failed to generate report:', error);
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || report.type === selectedType;
    return matchesSearch && matchesType;
  });

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-2 text-sm text-gray-600">Loading reports...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Reports & Analytics</h1>
            <p className="text-sm text-gray-500 mt-1">
              Generate and download various reports for your organization
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <ProButton variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Reports
            </ProButton>
          </div>
        </div>

        {/* Quick Actions */}
        <EnterpriseCard>
          <EnterpriseCardHeader>
            <EnterpriseCardTitle>Generate Reports</EnterpriseCardTitle>
          </EnterpriseCardHeader>
          <EnterpriseCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ProButton 
                variant="outline" 
                fullWidth 
                className="justify-start"
                onClick={() => handleGenerateReport('attendance')}
              >
                <Clock className="w-4 h-4 mr-3" />
                Attendance Report
              </ProButton>
              <ProButton 
                variant="outline" 
                fullWidth 
                className="justify-start"
                onClick={() => handleGenerateReport('payroll')}
              >
                <DollarSign className="w-4 h-4 mr-3" />
                Payroll Report
              </ProButton>
              <ProButton 
                variant="outline" 
                fullWidth 
                className="justify-start"
                onClick={() => handleGenerateReport('leave')}
              >
                <Calendar className="w-4 h-4 mr-3" />
                Leave Report
              </ProButton>
              <ProButton 
                variant="outline" 
                fullWidth 
                className="justify-start"
                onClick={() => handleGenerateReport('performance')}
              >
                <TrendingUp className="w-4 h-4 mr-3" />
                Performance Report
              </ProButton>
            </div>
          </EnterpriseCardContent>
        </EnterpriseCard>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <EnterpriseCard>
            <EnterpriseCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Reports</p>
                  <p className="text-2xl font-semibold text-blue-600 mt-1">
                    {reports.length}
                  </p>
                  <div className="flex items-center mt-2 text-sm">
                    <FileText className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-blue-600">All time</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </EnterpriseCardContent>
          </EnterpriseCard>

          <EnterpriseCard>
            <EnterpriseCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-semibold text-green-600 mt-1">
                    {reports.filter(r => {
                      const reportDate = new Date(r.generatedDate);
                      const now = new Date();
                      return reportDate.getMonth() === now.getMonth() && 
                             reportDate.getFullYear() === now.getFullYear();
                    }).length}
                  </p>
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600">Generated</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </EnterpriseCardContent>
          </EnterpriseCard>

          <EnterpriseCard>
            <EnterpriseCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ready</p>
                  <p className="text-2xl font-semibold text-purple-600 mt-1">
                    {reports.filter(r => r.status === 'ready').length}
                  </p>
                  <div className="flex items-center mt-2 text-sm">
                    <Activity className="w-4 h-4 text-purple-500 mr-1" />
                    <span className="text-purple-600">Available</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <PieChart className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </EnterpriseCardContent>
          </EnterpriseCard>

          <EnterpriseCard>
            <EnterpriseCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Generating</p>
                  <p className="text-2xl font-semibold text-orange-600 mt-1">
                    {reports.filter(r => r.status === 'generating').length}
                  </p>
                  <div className="flex items-center mt-2 text-sm">
                    <Clock className="w-4 h-4 text-orange-500 mr-1" />
                    <span className="text-orange-600">In progress</span>
                  </div>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </EnterpriseCardContent>
          </EnterpriseCard>
        </div>

        {/* Filters */}
        <EnterpriseCard>
          <EnterpriseCardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 flex-1">
                <SmartInput
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-4 h-4 text-gray-400" />}
                  className="max-w-md"
                />
                
                <Input
                  placeholder="Date range..."
                  className="max-w-xs"
                />
                
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="attendance">Attendance</option>
                  <option value="payroll">Payroll</option>
                  <option value="leave">Leave</option>
                  <option value="performance">Performance</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <ProButton variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </ProButton>
            </div>
          </EnterpriseCardContent>
        </EnterpriseCard>

        {/* Reports Table */}
        <EnterpriseCard>
          <EnterpriseCardHeader>
            <div className="flex items-center justify-between">
              <EnterpriseCardTitle>
                Generated Reports ({filteredReports.length})
              </EnterpriseCardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  Showing {filteredReports.length} of {reports.length} reports
                </span>
              </div>
            </div>
          </EnterpriseCardHeader>
          <EnterpriseCardContent className="p-0">
            {filteredReports.length === 0 ? (
              <DataTableEmpty
                title="No reports found"
                description={searchQuery || selectedType !== 'all' 
                  ? 'Try adjusting your search or filters' 
                  : 'No reports have been generated yet. Start by generating your first report.'
                }
                icon={<FileText className="w-16 h-16 text-gray-400" />}
                action={!searchQuery && selectedType === 'all' && (
                  <ProButton onClick={() => handleGenerateReport('attendance')}>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate First Report
                  </ProButton>
                )}
              />
            ) : (
              <DataTable>
                <DataTableHeader>
                  <DataTableHeaderCell>Report Name</DataTableHeaderCell>
                  <DataTableHeaderCell>Type</DataTableHeaderCell>
                  <DataTableHeaderCell>Description</DataTableHeaderCell>
                  <DataTableHeaderCell>Generated Date</DataTableHeaderCell>
                  <DataTableHeaderCell>File Size</DataTableHeaderCell>
                  <DataTableHeaderCell>Status</DataTableHeaderCell>
                  <DataTableHeaderCell>Actions</DataTableHeaderCell>
                </DataTableHeader>
                <DataTableBody>
                  {filteredReports.map((report) => (
                    <DataTableRow key={report.id} hover>
                      <DataTableCell>
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <FileText className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {report.name}
                            </div>
                          </div>
                        </div>
                      </DataTableCell>
                      <DataTableCell>
                        <StatusBadge 
                          variant={report.type === 'payroll' ? 'success' : 
                                  report.type === 'attendance' ? 'primary' : 
                                  report.type === 'leave' ? 'warning' : 'gray'}
                        >
                          {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                        </StatusBadge>
                      </DataTableCell>
                      <DataTableCell>
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {report.description}
                        </div>
                      </DataTableCell>
                      <DataTableCell>
                        <div className="text-sm text-gray-900">
                          {new Date(report.generatedDate).toLocaleDateString()}
                        </div>
                      </DataTableCell>
                      <DataTableCell>
                        <div className="text-sm text-gray-900">
                          {report.fileSize}
                        </div>
                      </DataTableCell>
                      <DataTableCell>
                        <StatusBadge 
                          variant={report.status === 'ready' ? 'success' : 
                                  report.status === 'generating' ? 'warning' : 'danger'}
                        >
                          {report.status === 'ready' ? 'Ready' : 
                           report.status === 'generating' ? 'Generating' : 'Failed'}
                        </StatusBadge>
                      </DataTableCell>
                      <DataTableCell>
                        <div className="flex items-center space-x-2">
                          {actionLoading === report.id ? (
                            <div className="flex items-center space-x-2">
                              <LoadingSpinner />
                              <span className="text-xs text-gray-500">Downloading...</span>
                            </div>
                          ) : (
                            <>
                              <ProButton 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleDownload(report.id)}
                                disabled={report.status !== 'ready'}
                              >
                                <Download className="w-4 h-4" />
                              </ProButton>
                              <ProButton variant="ghost" size="sm">
                                <FileText className="w-4 h-4" />
                              </ProButton>
                            </>
                          )}
                        </div>
                      </DataTableCell>
                    </DataTableRow>
                  ))}
                </DataTableBody>
              </DataTable>
            )}
          </EnterpriseCardContent>
        </EnterpriseCard>
      </div>
    </Layout>
  );
}
