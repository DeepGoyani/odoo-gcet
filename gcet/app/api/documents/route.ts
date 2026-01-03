import { NextRequest, NextResponse } from 'next/server';

// Mock data for documents
const mockDocuments = [
  {
    id: '1',
    name: 'Employee Handbook 2024',
    type: 'pdf',
    category: 'policy',
    description: 'Complete employee handbook with company policies and procedures',
    uploadedBy: 'HR Department',
    uploadedDate: '2024-10-15T10:30:00Z',
    fileSize: '4.2 MB',
    downloadUrl: '/api/documents/download/1',
    isShared: true,
    tags: ['policy', 'handbook', '2024']
  },
  {
    id: '2',
    name: 'John Doe - Employment Contract',
    type: 'doc',
    category: 'contract',
    description: 'Employment agreement for John Doe',
    uploadedBy: 'HR Department',
    uploadedDate: '2024-09-20T14:20:00Z',
    fileSize: '856 KB',
    downloadUrl: '/api/documents/download/2',
    isShared: false,
    tags: ['contract', 'employment', 'john-doe']
  },
  {
    id: '3',
    name: 'Q3 2024 Financial Report',
    type: 'xls',
    category: 'report',
    description: 'Quarterly financial analysis and projections',
    uploadedBy: 'Finance Team',
    uploadedDate: '2024-10-31T09:15:00Z',
    fileSize: '1.8 MB',
    downloadUrl: '/api/documents/download/3',
    isShared: true,
    tags: ['finance', 'quarterly', '2024']
  },
  {
    id: '4',
    name: 'Safety Training Certificate',
    type: 'pdf',
    category: 'certificate',
    description: 'Workplace safety training completion certificate',
    uploadedBy: 'Safety Officer',
    uploadedDate: '2024-11-05T16:45:00Z',
    fileSize: '234 KB',
    downloadUrl: '/api/documents/download/4',
    isShared: true,
    tags: ['safety', 'training', 'certificate']
  },
  {
    id: '5',
    name: 'Team Building Photos',
    type: 'img',
    category: 'other',
    description: 'Photos from recent team building event',
    uploadedBy: 'Marketing Team',
    uploadedDate: '2024-11-10T11:30:00Z',
    fileSize: '12.5 MB',
    downloadUrl: '/api/documents/download/5',
    isShared: true,
    tags: ['team', 'event', 'photos']
  }
];

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from your database
    return NextResponse.json(mockDocuments);
  } catch (error) {
    console.error('Failed to fetch documents:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const tags = formData.get('tags') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save the file to storage (S3, local storage, etc.)
    // 2. Save metadata to database
    // 3. Generate download URL

    const newDocument = {
      id: Date.now().toString(),
      name: file.name,
      type: file.type.includes('pdf') ? 'pdf' : 
            file.type.includes('word') || file.name.includes('.doc') ? 'doc' :
            file.type.includes('sheet') || file.name.includes('.xls') ? 'xls' :
            file.type.includes('image') ? 'img' : 'other',
      category: category || 'other',
      description: description || '',
      uploadedBy: 'Current User',
      uploadedDate: new Date().toISOString(),
      fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      downloadUrl: `/api/documents/download/${Date.now()}`,
      isShared: false,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : []
    };

    return NextResponse.json({
      message: 'Document uploaded successfully',
      document: newDocument
    });
  } catch (error) {
    console.error('Failed to upload document:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const documentId = searchParams.get('id');

    if (!documentId) {
      return NextResponse.json(
        { error: 'Document ID is required' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Delete file from storage
    // 2. Remove from database

    return NextResponse.json({
      message: 'Document deleted successfully'
    });
  } catch (error) {
    console.error('Failed to delete document:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
