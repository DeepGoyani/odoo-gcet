# 🌊 Dayflow - Smart HR Platform

<div align="center">

![Dayflow Logo](https://img.shields.io/badge/Dayflow-Smart%20HR%20Platform-4F46E5?style=for-the-badge&logo=briefcase&logoColor=white)

**Every workday, perfectly aligned.**

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.2-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Architecture](#-architecture) • [Screenshots](#-screenshots)

</div>

---

## 👥 TEAM MEMBERS

| ID | Name            | Role                |
|----|-----------------|---------------------|
| 01 | Aditya Raulji   | Full Stack Developer |
| 02 | Yasar Khan     | Full Stack Developer |
| 03 | Ridham Patel   | Frontend Developer |
| 04 | Rijans Patoliya| Backend Developer |


---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Database Schema](#-database-schema)
- [User Workflows](#-user-workflows)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Role-Based Access Control](#-role-based-access-control)
- [Security Features](#-security-features)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Dayflow** is an enterprise-grade Human Resource Management System (HRMS) designed to digitize and streamline core HR operations. Built with modern web technologies, it provides a comprehensive solution for employee onboarding, profile management, attendance tracking, leave management, payroll visibility, and approval workflows.

### Key Objectives

- 🔐 Secure authentication with role-based access control
- 👤 Complete employee profile management system
- 📅 Real-time attendance tracking with check-in/check-out
- 🏖️ Leave and time-off request management
- 💰 Transparent payroll and salary structure visibility
- ✅ Streamlined approval workflows for HR/Admin
- 📊 Analytics and reporting dashboards

### System Overview Mindmap

```mermaid
mindmap
  root((Dayflow HRMS))
    Authentication
      Sign Up/Sign In
      Email Verification
      JWT Sessions
      Role-Based Access
    Employee Management
      Profile Management
      Personal Details
      Job Information
      Document Upload
      Auto-Generated IDs
    Attendance
      Daily Tracking
      Check-In/Out
      Weekly View
      Status Management
      Attendance Reports
    Leave Management
      Leave Requests
      Approval Workflow
      Leave Types
      Balance Tracking
    Payroll
      Salary Structure
      Wage Information
      Deductions
      PF Contributions
      Tax Details
    Admin Dashboard
      Employee Overview
      Attendance Records
      Leave Approvals
      Payroll Management
```

---

## ✨ Features

### 🔐 Authentication & Authorization

- ✅ **Secure Sign Up**
  - Employee ID auto-generation
  - Email and password registration
  - Role selection (ADMIN/HR or EMPLOYEE)
  - Password strength validation (min 8 chars, uppercase, lowercase, number, special char)
  - Duplicate email/employee ID prevention
  - Email verification flow with 24-hour token expiry

- ✅ **Secure Sign In**
  - Email and password authentication
  - JWT-based session management
  - Email verification check before access
  - Role-based dashboard redirection
  - Clear error messaging

- ✅ **Role-Based Access Control**
  - ADMIN/HR: Full system access with management privileges
  - EMPLOYEE: Limited access to personal data
  - Protected routes with middleware
  - Automatic redirect based on user role

### 👥 Employee Profile Management

- ✅ **Comprehensive Profile System**
  - Personal details (name, email, phone, DOB, gender, marital status)
  - Profile picture upload
  - Residing address and nationality
  - About section with interests and hobbies
  - Bank account details (account number, IFSC, PAN, UAN)
  - Document management (resume, certificates, ID proofs)

- ✅ **Job Details**
  - Job position and department
  - Manager assignment
  - Work location
  - Date of joining
  - Employment history

- ✅ **Edit Capabilities**
  - Employees can edit limited fields (address, phone, profile picture)
  - Admin/HR can edit all employee details
  - Real-time updates with validation

### 📅 Attendance Management

- ✅ **Attendance Tracking**
  - Daily check-in/check-out system
  - Weekly and monthly attendance views
  - Status types: Present, Absent, Half-day, Leave
  - Automatic time calculation
  - Attendance history and reports

- ✅ **Smart Features**
  - Employees view only their own attendance
  - Admin/HR can view all employee attendance
  - Overdue and late indicators
  - Export attendance reports

### 🏖️ Leave & Time-Off Management

- ✅ **Leave Application (Employee)**
  - Multiple leave types (Paid, Sick, Unpaid, Casual)
  - Date range selection
  - Remarks and reason field
  - Leave balance visibility
  - Request status tracking (Pending, Approved, Rejected)

- ✅ **Leave Approval (Admin/HR)**
  - View all leave requests
  - Approve or reject with comments
  - Instant notification to employees
  - Leave analytics and reports

### 💰 Payroll & Salary Management

- ✅ **Comprehensive Salary Structure**
  - Monthly and yearly wage information
  - Basic salary with percentage breakdown
  - House Rent Allowance (HRA)
  - Standard allowance and performance bonus
  - Leave Travel Allowance (LTA)
  - Fuel allowance
  - Employee and Employer PF contributions
  - Professional tax deductions

- ✅ **Payroll Features**
  - Read-only access for employees
  - Admin can view and update all payroll data
  - Salary slip generation
  - Tax calculation support

### 📊 Dashboard & Analytics

- ✅ **Employee Dashboard**
  - Quick-access cards (Profile, Attendance, Leave)
  - Recent activity feed
  - Leave balance overview
  - Upcoming events and alerts

- ✅ **Admin/HR Dashboard**
  - Employee list with search and filters
  - Attendance overview charts
  - Leave approval queue
  - Payroll summary
  - Analytics and insights

### Employee Workflow Diagram

```mermaid
flowchart LR
    subgraph Employee
        E1[Sign Up]
        E2[Email Verification]
        E3[Login]
        E4[View Profile]
        E5[Check-In/Out]
        E6[Apply Leave]
        E7[View Payroll]
    end
    
    subgraph Admin/HR
        A1[Manage Employees]
        A2[Approve Leave]
        A3[Track Attendance]
        A4[Update Payroll]
        A5[Generate Reports]
    end
    
    E1 --> E2
    E2 --> E3
    E3 --> E4
    E4 --> E5
    E5 --> E6
    E6 --> A2
    A2 --> E6
    
    A1 --> A3
    A3 --> A4
    A4 --> A5
    
    style E1 fill:#4F46E5,color:#fff
    style E3 fill:#4F46E5,color:#fff
    style A2 fill:#7C3AED,color:#fff
    style A4 fill:#7C3AED,color:#fff
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.1.3 (App Router with React Server Components)
- **UI Library**: React 19.0
- **Styling**: Tailwind CSS 3.4.17
- **Forms**: React Hook Form 7.54.2
- **Validation**: Zod 3.24.1 + @hookform/resolvers 3.9.1
- **Icons**: Lucide React (modern icon library)
- **Components**: Custom UI components (shadcn/ui inspired)

### Backend
- **Runtime**: Next.js Server Actions & API Routes
- **Database**: PostgreSQL (Production-ready relational database)
- **ORM**: Prisma 6.2.0 (Type-safe database client)
- **Authentication**: NextAuth.js 4.24.10 (JWT-based sessions)
- **Password Security**: bcryptjs 2.4.3 (12-round hashing)

### Development Tools
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm
- **Version Control**: Git
- **Linting**: ESLint 9.18.0 (Next.js config)
- **CSS Processing**: PostCSS 8.4.49 + Autoprefixer 10.4.20

### Technology Stack Visualization

```mermaid
graph TB
    subgraph Frontend
        A[Next.js 15] --> B[React 19]
        B --> C[Tailwind CSS]
        B --> D[React Hook Form]
        D --> E[Zod Validation]
    end
    
    subgraph Backend
        F[Server Actions] --> G[Prisma ORM]
        F --> H[NextAuth.js]
        F --> I[bcryptjs]
        G --> J[(PostgreSQL)]
    end
    
    subgraph DevTools
        K[ESLint]
        L[PostCSS]
        M[Git]
    end
    
    B --> F
    H --> J
    
    style A fill:#000,color:#fff
    style B fill:#61DAFB,color:#000
    style C fill:#38B2AC,color:#fff
    style G fill:#2D3748,color:#fff
    style J fill:#336791,color:#fff
```

---

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        UI[Next.js App Router]
        Pages[Pages & Routes]
        Components[React Components]
        Forms[Form Handlers]
    end

    subgraph "Server Layer"
        API[API Routes]
        Auth[NextAuth Handler]
        Actions[Server Actions]
        Middleware[Auth Middleware]
    end

    subgraph "Data Layer"
        Prisma[Prisma ORM]
        DB[(PostgreSQL)]
    end

    subgraph "Security Layer"
        JWT[JWT Tokens]
        Hash[Password Hashing]
        Validation[Zod Schemas]
    end

    UI --> Pages
    Pages --> Components
    Components --> Forms
    Forms --> API
    Forms --> Actions
    API --> Auth
    Actions --> Middleware
    Middleware --> Prisma
    Prisma --> DB
    Auth --> JWT
    Auth --> Hash
    Forms --> Validation

    style UI fill:#4F46E5,color:#fff
    style Components fill:#7C3AED,color:#fff
    style Prisma fill:#2D3748,color:#fff
    style DB fill:#336791,color:#fff
```

### Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant R as Register Page
    participant API as API Route
    participant DB as Database
    participant Email as Email Service
    participant L as Login Page
    participant M as Middleware
    
    U->>R: Fill registration form
    R->>API: POST /api/auth/signup
    API->>API: Validate with Zod
    API->>API: Hash password (bcrypt)
    API->>DB: Create user record
    DB-->>API: User created
    API->>API: Generate verification token
    API->>Email: Send verification email
    API-->>R: Return verification URL
    
    Note over U,M: Email Verification
    
    U->>Email: Click verification link
    Email->>API: GET /api/auth/verify-email?token=xxx
    API->>DB: Verify token & update user
    DB-->>API: Email verified
    API-->>U: Redirect to login
    
    Note over U,M: Login Flow
    
    U->>L: Enter credentials
    L->>API: POST /api/auth/signin
    API->>DB: Verify email/password
    DB-->>API: User found
    API->>API: Generate JWT token
    API-->>L: Set session cookie
    L-->>U: Redirect to dashboard
    
    Note over U,M: Protected Route Access
    
    U->>M: Navigate to /dashboard
    M->>M: Verify JWT token
    alt Valid Token & Verified Email
        M-->>U: Allow access
    else Invalid/Unverified
        M-->>U: Redirect to /auth/login
    end
```

### Request Lifecycle

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Middleware
    participant ServerAction
    participant Prisma
    participant Database

    User->>Browser: Navigate to /admin/employees
    Browser->>Middleware: Check authentication
    Middleware->>Middleware: Verify JWT token
    Middleware->>Middleware: Check user role
    alt Admin/HR Role
        Middleware-->>Browser: Allow access
    else Employee Role
        Middleware-->>Browser: Redirect to /dashboard
    end
    Browser->>ServerAction: Fetch employee list
    ServerAction->>Prisma: findMany with relations
    Prisma->>Database: SELECT with JOINs
    Database-->>Prisma: Return employee data
    Prisma-->>ServerAction: Formatted data
    ServerAction-->>Browser: Return employee list
    Browser->>User: Render employee table
```

---

## 🗄️ Database Schema

```mermaid
erDiagram
    Company ||--o{ User : "has employees"
    User ||--o| EmployeeProfile : "has profile"
    User ||--o| JobDetails : "has job details"
    User ||--o| SalaryStructure : "has salary"
    User ||--o{ Document : "uploads"
    User ||--o{ Attendance : "records"
    Company ||--o{ CompanySettings : "has settings"

    Company {
        string id PK
        string name UK
        string logo
        timestamp createdAt
        timestamp updatedAt
    }

    User {
        string id PK
        string employeeId UK
        string email UK
        string password
        string name
        string phone
        enum role
        string companyId FK
        boolean emailVerified
        string verificationToken
        datetime verificationTokenExpiry
        timestamp createdAt
        timestamp updatedAt
    }

    EmployeeProfile {
        string id PK
        string userId UK,FK
        string profilePicture
        datetime dateOfBirth
        string gender
        string maritalStatus
        string nationality
        string personalEmail
        string residingAddress
        string about
        string jobLoves
        string interestsHobbies
        string accountNumber
        string bankName
        string ifscCode
        string panNumber
        string uanNumber
        timestamp createdAt
        timestamp updatedAt
    }

    JobDetails {
        string id PK
        string userId UK,FK
        string jobPosition
        string department
        string manager
        string workLocation
        datetime dateOfJoining
        timestamp createdAt
        timestamp updatedAt
    }

    SalaryStructure {
        string id PK
        string userId UK,FK
        float monthlyWage
        float yearlyWage
        int workingDaysPerWeek
        float overtime
        float basicSalary
        float basicSalaryPercent
        float houseRentAllowance
        float hraPercent
        float standardAllowance
        float performanceBonus
        float performanceBonusPercent
        float leaveTravelAllowance
        float ltaPercent
        float fuelAllowance
        float employeePF
        float employeePFPercent
        float employerPF
        float employerPFPercent
        float professionalTax
        timestamp createdAt
        timestamp updatedAt
    }

    Document {
        string id PK
        string userId FK
        string fileName
        string fileType
        string fileUrl
        string documentType
        timestamp createdAt
        timestamp updatedAt
    }

    Attendance {
        string id PK
        string userId FK
        datetime date
        datetime checkIn
        datetime checkOut
        string status
        timestamp createdAt
        timestamp updatedAt
    }

    CompanySettings {
        string id PK
        string companyId
        int year
        int lastSerialNumber
        timestamp createdAt
        timestamp updatedAt
    }
```

### Database Enums

| Enum | Values | Description |
|------|--------|-------------|
| **Role** | ADMIN, EMPLOYEE | User access level |
| **AttendanceStatus** | Present, Absent, Half Day, Leave | Daily attendance state |
| **LeaveType** | Paid, Sick, Unpaid, Casual | Leave category |
| **LeaveStatus** | Pending, Approved, Rejected | Leave request state |

---

## 🔄 User Workflows

### Employee Onboarding Journey

```mermaid
journey
    title Employee Onboarding Journey
    section Registration
      Visit signup page: 5: Employee
      Fill registration form: 4: Employee
      Submit form: 5: Employee
      Receive verification email: 3: Employee
    section Verification
      Click verification link: 5: Employee
      Email verified: 5: Employee
    section First Login
      Login with credentials: 5: Employee
      View dashboard: 5: Employee
      Complete profile: 4: Employee
      Upload documents: 3: Employee
    section Daily Usage
      Check-in for work: 5: Employee
      View attendance: 5: Employee
      Apply for leave: 4: Employee
      Check payroll: 5: Employee
```

### Leave Request Workflow

```mermaid
stateDiagram-v2
    [*] --> Draft: Employee creates request
    Draft --> Pending: Submit request
    Pending --> UnderReview: HR reviews
    UnderReview --> Approved: HR approves
    UnderReview --> Rejected: HR rejects
    Approved --> [*]: Employee notified
    Rejected --> [*]: Employee notified
    
    Pending: 🕐 PENDING\n(Awaiting HR Review)
    UnderReview: 👀 UNDER REVIEW\n(HR Evaluating)
    Approved: ✅ APPROVED\n(Leave Granted)
    Rejected: ❌ REJECTED\n(Request Denied)
```

### Admin Daily Workflow

```mermaid
flowchart TD
    Start([Admin Login]) --> Dashboard[View Dashboard]
    Dashboard --> CheckLeave{Pending Leave Requests?}
    CheckLeave -->|Yes| ReviewLeave[Review Leave Requests]
    CheckLeave -->|No| CheckAttendance[Check Attendance]
    ReviewLeave --> ApproveReject[Approve/Reject]
    ApproveReject --> CheckAttendance
    CheckAttendance --> ManageEmployees[Manage Employees]
    ManageEmployees --> UpdatePayroll{Need Payroll Update?}
    UpdatePayroll -->|Yes| EditPayroll[Update Salary Structure]
    UpdatePayroll -->|No| GenerateReports[Generate Reports]
    EditPayroll --> GenerateReports
    GenerateReports --> End([Logout])
    
    style Start fill:#4F46E5,color:#fff
    style ReviewLeave fill:#7C3AED,color:#fff
    style ApproveReject fill:#7C3AED,color:#fff
    style GenerateReports fill:#10B981,color:#fff
```

---

## 📥 Installation

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager
- Git (for version control)

### Step 1: Clone Repository

```bash
git clone https://github.com/aditya-raulji/dayflow-smart-hr-platform.git
cd dayflow-smart-hr-platform
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Setup

Create `.env` file in project root:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/dayflow_hr?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here-change-this-in-production"

# JWT Secret (generate a random string)
JWT_SECRET="your-jwt-secret-key-here-change-this-in-production"

# App Configuration
NODE_ENV="development"

# Email Configuration (Optional - for production)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-specific-password"
```

**Generate secure secrets:**

```bash
# For NEXTAUTH_SECRET and JWT_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 4: Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🚀

---

## 🔐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ Yes | - |
| `NEXTAUTH_URL` | Application URL | ✅ Yes | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | NextAuth encryption key | ✅ Yes | - |
| `JWT_SECRET` | JWT token secret | ✅ Yes | - |
| `NODE_ENV` | Environment mode | ❌ No | `development` |
| `EMAIL_HOST` | SMTP server host | ❌ No | Mock emails |
| `EMAIL_PORT` | SMTP server port | ❌ No | Mock emails |
| `EMAIL_USER` | SMTP email address | ❌ No | Mock emails |
| `EMAIL_PASS` | SMTP password | ❌ No | Mock emails |

---

## 🚀 Usage

### Quick Start Guide

#### For Employees

1. **Sign Up**
   - Navigate to `/auth/register`
   - Fill in your details (Employee ID will be auto-generated)
   - Choose role as "EMPLOYEE"
   - Submit and verify your email

2. **Login**
   - Go to `/auth/login`
   - Enter email and password
   - Access your dashboard at `/dashboard`

3. **Daily Tasks**
   - Check-in when you start work
   - View your attendance history
   - Apply for leave when needed
   - Check your salary structure

#### For Admin/HR

1. **Sign Up as Admin**
   - Register with role "ADMIN"
   - Verify email and login

2. **Manage Employees**
   - View all employees at `/admin/employees`
   - Add new employees
   - Update employee profiles
   - Manage salary structures

3. **Approve Requests**
   - Review leave requests at `/admin/leave`
   - Approve or reject with comments
   - Track attendance records

4. **Generate Reports**
   - View attendance reports
   - Export payroll data
   - Analyze employee metrics

### User Journey Map

```mermaid
journey
    title Complete HRMS User Journey
    section Onboarding
      Sign up: 5: Employee
      Email verification: 4: Employee
      First login: 5: Employee
      Complete profile: 4: Employee
    section Daily Work
      Check-in: 5: Employee
      Work hours: 5: Employee
      Check-out: 5: Employee
      View attendance: 4: Employee
    section Leave Management
      Check leave balance: 5: Employee
      Apply for leave: 4: Employee
      Wait for approval: 2: Employee
      Receive notification: 5: Employee
    section Payroll
      View salary slip: 5: Employee
      Check deductions: 4: Employee
      Download payslip: 5: Employee
```

---

## 📡 API Reference

### Authentication Endpoints

#### Sign Up
```javascript
POST /api/auth/signup
Content-Type: application/json

{
  "employeeId": "EMP2026001",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "password": "SecurePass@123",
  "role": "EMPLOYEE"
}

Response: {
  "success": true,
  "message": "Registration successful",
  "verificationUrl": "http://localhost:3000/auth/verify-email?token=xxx"
}
```

#### Sign In
```javascript
POST /api/auth/signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass@123"
}

Response: {
  "success": true,
  "user": {
    "id": "clx...",
    "email": "john@example.com",
    "role": "EMPLOYEE"
  }
}
```

#### Email Verification
```javascript
GET /api/auth/verify-email?token=verification_token

Response: {
  "success": true,
  "message": "Email verified successfully"
}
```

### Employee Endpoints

#### Get Employee Profile
```javascript
GET /api/employee/profile
Authorization: Bearer <token>

Response: {
  "user": {...},
  "profile": {...},
  "jobDetails": {...},
  "salaryStructure": {...}
}
```

#### Update Profile
```javascript
PUT /api/employee/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "phone": "+91 9876543210",
  "residingAddress": "123 Main St, City"
}
```

### Attendance Endpoints

#### Check-In
```javascript
POST /api/attendance/checkin
Authorization: Bearer <token>

Response: {
  "success": true,
  "attendance": {
    "id": "...",
    "checkIn": "2026-01-03T09:00:00Z",
    "status": "Present"
  }
}
```

#### Get Attendance Records
```javascript
GET /api/attendance?month=1&year=2026
Authorization: Bearer <token>

Response: {
  "attendance": [...]
}
```

---

## 📁 Project Structure

```
dayflow-smart-hr-platform/
├── app/
│   ├── (auth)/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.jsx           # Login page
│   │   │   ├── register/
│   │   │   │   └── page.jsx           # Registration page
│   │   │   └── verify-email/
│   │   │       └── page.jsx           # Email verification
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── page.jsx               # Admin dashboard
│   │   │   ├── employees/             # Employee management
│   │   │   ├── attendance/            # Attendance overview
│   │   │   ├── leave/                 # Leave approvals
│   │   │   ├── payroll/               # Payroll management
│   │   │   └── profile/               # Admin profile
│   │   ├── dashboard/
│   │   │   ├── page.jsx               # Employee dashboard
│   │   │   ├── attendance/            # Personal attendance
│   │   │   └── profile/               # Employee profile
│   │   ├── attendance/
│   │   │   └── page.jsx               # Attendance tracking
│   │   ├── leave/
│   │   │   └── page.jsx               # Leave requests
│   │   ├── payroll/
│   │   │   └── page.jsx               # Salary details
│   │   └── profile/
│   │       └── page.jsx               # Profile management
│   ├── api/
│   │   └── auth/
│   │       ├── [...nextauth]/
│   │       │   └── route.js           # NextAuth handler
│   │       ├── signup/
│   │       │   └── route.js           # Registration API
│   │       └── verify-email/
│   │           └── route.js           # Email verification API
│   ├── layout.jsx                     # Root layout
│   ├── page.jsx                       # Home page
│   └── globals.css                    # Global styles
├── components/
│   ├── auth/
│   │   ├── login-form.jsx             # Login form
│   │   └── signup-form.jsx            # Registration form
│   ├── employee/
│   │   ├── profile-card.jsx           # Profile display
│   │   ├── attendance-card.jsx        # Attendance widget
│   │   ├── leave-form.jsx             # Leave application
│   │   └── payroll-view.jsx           # Salary display
│   ├── admin/
│   │   ├── employee-table.jsx         # Employee list
│   │   ├── leave-approvals.jsx        # Leave approval UI
│   │   └── analytics-dashboard.jsx    # Charts & stats
│   ├── layout/
│   │   └── sidebar.jsx                # Navigation sidebar
│   └── ui/
│       ├── button.jsx                 # Button component
│       ├── card.jsx                   # Card components
│       ├── input.jsx                  # Input component
│       ├── select.jsx                 # Select dropdown
│       └── table.jsx                  # Table component
├── lib/
│   ├── validations/
│   │   └── auth.js                    # Zod schemas
│   ├── auth-utils.js                  # Auth helpers
│   ├── db.js                          # Prisma client
│   └── utils.js                       # Utility functions
├── prisma/
│   ├── schema.prisma                  # Database schema
│   └── migrations/                    # DB migrations
├── middleware.js                      # Route protection
├── .env                               # Environment variables
├── .gitignore                         # Git ignore rules
├── jsconfig.json                      # JS configuration
├── tailwind.config.js                 # Tailwind config
├── postcss.config.js                  # PostCSS config
├── package.json                       # Dependencies
└── README.md                          # Documentation
```

---

## 🔐 Role-Based Access Control

```mermaid
graph TD
    subgraph "ADMIN/HR (Full Access)"
        A1[View All Employees]
        A2[Create/Edit Employees]
        A3[Manage Attendance]
        A4[Approve/Reject Leave]
        A5[Update Payroll]
        A6[Generate Reports]
        A7[System Settings]
    end

    subgraph "EMPLOYEE (Limited Access)"
        E1[View Own Profile]
        E2[Edit Limited Fields]
        E3[Check-In/Check-Out]
        E4[View Own Attendance]
        E5[Apply for Leave]
        E6[View Own Payroll]
        E7[Upload Documents]
    end

    style A1 fill:#4F46E5,color:#fff
    style A2 fill:#4F46E5,color:#fff
    style A4 fill:#4F46E5,color:#fff
    style E1 fill:#7C3AED,color:#fff
    style E3 fill:#7C3AED,color:#fff
    style E5 fill:#7C3AED,color:#fff
```

### Permission Matrix

| Feature | Admin/HR | Employee |
|---------|----------|----------|
| **Authentication** |
| Sign Up | ✅ Yes | ✅ Yes |
| Sign In | ✅ Yes | ✅ Yes |
| Email Verification | ✅ Yes | ✅ Yes |
| **Employee Management** |
| View All Employees | ✅ Yes | ❌ No |
| Create Employee | ✅ Yes | ❌ No |
| Edit Any Employee | ✅ Yes | ❌ No |
| Delete Employee | ✅ Yes | ❌ No |
| View Own Profile | ✅ Yes | ✅ Yes |
| Edit Own Profile | ✅ Limited | ✅ Limited |
| **Attendance** |
| View All Attendance | ✅ Yes | ❌ No |
| View Own Attendance | ✅ Yes | ✅ Yes |
| Check-In/Check-Out | ✅ Yes | ✅ Yes |
| Edit Attendance | ✅ Yes | ❌ No |
| Export Reports | ✅ Yes | ❌ No |
| **Leave Management** |
| View All Requests | ✅ Yes | ❌ No |
| View Own Requests | ✅ Yes | ✅ Yes |
| Apply for Leave | ✅ Yes | ✅ Yes |
| Approve/Reject Leave | ✅ Yes | ❌ No |
| **Payroll** |
| View All Payroll | ✅ Yes | ❌ No |
| View Own Payroll | ✅ Yes | ✅ Yes (Read-only) |
| Update Salary | ✅ Yes | ❌ No |
| Generate Payslips | ✅ Yes | ✅ Own Only |
| **Analytics** |
| Dashboard Access | ✅ Full | ✅ Limited |
| Generate Reports | ✅ Yes | ❌ No |
| View Analytics | ✅ Yes | ✅ Own Stats |

---

## 🔒 Security Features

### Authentication Security

- ✅ **Password Hashing**: bcrypt with 12 salt rounds
- ✅ **JWT Sessions**: Secure token-based authentication
- ✅ **Email Verification**: Mandatory before system access
- ✅ **Token Expiry**: 24-hour verification token validity
- ✅ **Password Strength**: Enforced complexity requirements
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character

### Authorization Security

- ✅ **Role-Based Access Control (RBAC)**
- ✅ **Protected Routes**: Middleware-based route protection
- ✅ **Session Management**: Secure cookie handling
- ✅ **CSRF Protection**: Built-in NextAuth protection
- ✅ **SQL Injection Prevention**: Prisma parameterized queries

### Data Security

- ✅ **Input Validation**: Zod schema validation on all inputs
- ✅ **XSS Protection**: React automatic escaping
- ✅ **Secure Headers**: Next.js security headers
- ✅ **Environment Variables**: Sensitive data in .env
- ✅ **Database Encryption**: PostgreSQL encryption at rest

### Security Architecture

```mermaid
flowchart TD
    User[User Request] --> SSL[HTTPS/SSL]
    SSL --> Middleware[Auth Middleware]
    Middleware --> JWT{Valid JWT?}
    JWT -->|No| Reject[Redirect to Login]
    JWT -->|Yes| Role{Check Role}
    Role -->|Admin| AdminRoute[Admin Routes]
    Role -->|Employee| EmployeeRoute[Employee Routes]
    AdminRoute --> Validation[Zod Validation]
    EmployeeRoute --> Validation
    Validation --> Prisma[Prisma ORM]
    Prisma --> DB[(Encrypted DB)]
    
    style SSL fill:#10B981,color:#fff
    style JWT fill:#4F46E5,color:#fff
    style Validation fill:#7C3AED,color:#fff
    style DB fill:#336791,color:#fff
```

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅ (Completed)
- [x] Authentication system (Sign Up, Sign In, Email Verification)
- [x] Role-based access control (Admin/Employee)
- [x] Database schema design
- [x] Basic UI components
- [x] Middleware protection

### Phase 2: Core Features 🚧 (In Progress)
- [x] Employee profile management
- [x] Attendance tracking system
- [x] Leave request workflow
- [x] Payroll structure display
- [ ] Document upload system
- [ ] Email notifications

### Phase 3: Advanced Features 📋 (Planned)
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Salary slip generation (PDF)
- [ ] Attendance reports export
- [ ] Leave balance calculation
- [ ] Performance review system
- [ ] Multi-company support

### Phase 4: Enhancements 🔮 (Future)
- [ ] Mobile app (React Native)
- [ ] Biometric attendance integration
- [ ] AI-powered insights
- [ ] Automated payroll processing
- [ ] Integration with accounting software
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Offline mode support

### Feature Roadmap Timeline

```mermaid
gantt
    title Dayflow Development Roadmap
    dateFormat  YYYY-MM-DD
    section Phase 1
    Authentication System           :done, auth, 2025-12-01, 2025-12-15
    Database Design                 :done, db, 2025-12-10, 2025-12-20
    Role-Based Access              :done, rbac, 2025-12-15, 2025-12-25
    
    section Phase 2
    Employee Profiles              :active, profiles, 2025-12-26, 2026-01-10
    Attendance System              :active, attendance, 2026-01-05, 2026-01-20
    Leave Management               :active, leave, 2026-01-10, 2026-01-25
    Payroll Display                :payroll, 2026-01-15, 2026-01-30
    
    section Phase 3
    Analytics Dashboard            :analytics, 2026-02-01, 2026-02-20
    PDF Generation                 :pdf, 2026-02-10, 2026-02-28
    Email Notifications            :email, 2026-02-15, 2026-03-05
    
    section Phase 4
    Mobile App                     :mobile, 2026-03-01, 2026-04-30
    AI Insights                    :ai, 2026-04-01, 2026-05-31
```

---

## 🚀 Deployment

### Deployment Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        subgraph "Frontend - Vercel"
            V[Vercel Edge Network]
            N[Next.js App]
        end
        
        subgraph "Database - PostgreSQL"
            DB[(PostgreSQL)]
            Backup[(Automated Backups)]
        end
        
        subgraph "Email Service"
            SMTP[SMTP Provider]
        end
    end
    
    subgraph "CI/CD Pipeline"
        GH[GitHub Repository]
        Actions[GitHub Actions]
        Tests[Automated Tests]
    end
    
    Users[Users] --> V
    V --> N
    N --> DB
    N --> Backup
    N --> SMTP
    
    GH --> Actions
    Actions --> Tests
    Tests --> V
    
    style V fill:#000,color:#fff
    style DB fill:#336791,color:#fff
    style SMTP fill:#EA4335,color:#fff
```

### Deployment Steps

#### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables

3. **Environment Variables**
   Add all variables from `.env` to Vercel dashboard

4. **Deploy**
   - Vercel auto-deploys on push to main
   - Preview deployments for pull requests

#### Database Migration

```bash
# Generate migration
npx prisma migrate dev --name init

# Deploy to production
npx prisma migrate deploy
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation
4. **Test thoroughly**
   - Test all affected features
   - Ensure no breaking changes
5. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
7. **Open a Pull Request**

### Code Style Guidelines

- Use ES6+ JavaScript features
- Follow React best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add JSDoc comments for functions
- Keep components small and focused

### Commit Message Format

```
type(scope): subject

body

footer
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Example**:
```
feat(attendance): add check-in/check-out functionality

- Implemented real-time attendance tracking
- Added validation for duplicate check-ins
- Updated UI with status indicators

Closes #123
```

---

## 🐛 Known Issues & Troubleshooting

### Known Issues

- Email verification currently uses mock emails (development only)
- Document upload feature in progress
- PDF generation not yet implemented

### Troubleshooting

#### Database Connection Error
```bash
# Check DATABASE_URL in .env
# Ensure PostgreSQL is running
npx prisma db push
```

#### Authentication Issues
```bash
# Clear cookies and try again
# Regenerate NEXTAUTH_SECRET and JWT_SECRET
```

#### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Dayflow - Smart HR Platform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Prisma Team** - For the excellent ORM
- **Vercel** - For seamless deployment platform
- **Tailwind CSS** - For utility-first CSS framework
- **NextAuth.js** - For authentication solution
- **PostgreSQL** - For robust database system

---

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ **Starring** the repository
- 🐛 **Reporting** bugs and issues
- 💡 **Suggesting** new features
- 🤝 **Contributing** to the codebase
- 📢 **Sharing** with others

---

</div>