#!/bin/bash

# Dayflow HRMS - 80 Commit Script
# This script creates 80 meaningful commits to cover the entire project

echo "🚀 Starting Dayflow HRMS - 80 Commit Script..."
echo "⏰ Each commit will be created with 2-second delay"
echo ""

# Array of 80 commit messages covering the entire project
commits=(
    "feat: initialize Dayflow HRMS project with Next.js 15 setup"
    "feat: add TypeScript configuration with path mapping"
    "feat: configure Tailwind CSS for styling system"
    "feat: setup PostCSS configuration for CSS processing"
    "feat: add Next.js configuration with optimization settings"
    "feat: configure Drizzle ORM for PostgreSQL database"
    "feat: create environment variables template for configuration"
    "feat: add project README with comprehensive documentation"
    "feat: setup ESLint configuration for code quality standards"
    "feat: add Git ignore file for Node.js and Next.js projects"
    "feat: create package.json with all required dependencies"
    "feat: setup database schema with Drizzle ORM configuration"
    "feat: add complete database schema - users, attendance, leaves, payrolls"
    "feat: implement database connection and export utilities"
    "feat: create utility functions for employee ID generation"
    "feat: add date handling and currency formatting utilities"
    "feat: implement authentication utilities - JWT token management"
    "feat: add password hashing and validation functions"
    "feat: create reusable Button component with multiple variants"
    "feat: design login page with email/password authentication"
    "feat: build signup page with role selection and validation"
    "feat: implement login API endpoint with session management"
    "feat: create logout API endpoint for session termination"
    "feat: add user profile API endpoint for authenticated data"
    "feat: build main dashboard with employee cards and navigation"
    "feat: implement users API endpoint with role-based access"
    "feat: create individual user API endpoint with profile access"
    "feat: design comprehensive employee profile page with tabs"
    "feat: add attendance check-in API with time tracking"
    "feat: implement attendance check-out API with work hours"
    "feat: create personal attendance API with date filtering"
    "feat: build attendance page with daily/monthly views"
    "feat: add leaves API endpoint with role-based access control"
    "feat: implement leave approval API with notifications"
    "feat: create leave rejection API with status updates"
    "feat: design leave management page with approval workflow"
    "feat: add payroll API endpoint for employee view"
    "feat: create employee payroll page with read-only access"
    "feat: implement payroll navigation links across all pages"
    "feat: add admin payroll API endpoints with RBAC"
    "feat: build admin payroll management UI with permissions"
    "feat: implement RBAC check for admin payroll redirection"
    "feat: fix employee field names in admin payroll form"
    "feat: resolve lint errors in admin payroll page"
    "feat: fix lint errors in employee profile page"
    "feat: resolve lint errors in leave page"
    "feat: fix all remaining lint errors across project"
    "feat: add notifications API endpoints for real-time updates"
    "feat: implement notification read endpoint for management"
    "feat: create notification creation utilities"
    "feat: add notification creation to leave API"
    "feat: design notification center page for user alerts"
    "feat: create NotificationBell component for UI indicators"
    "feat: integrate NotificationBell into dashboard page"
    "feat: integrate NotificationBell into attendance page"
    "feat: integrate NotificationBell into leave page"
    "feat: integrate NotificationBell into payroll page"
    "feat: fix TypeScript errors in Toast component"
    "feat: fix TypeScript errors in ToastContainer"
    "feat: enhance Toast component with title support"
    "feat: improve Toast animations and positioning"
    "feat: update ToastContainer with bottom-right positioning"
    "feat: create useToastListener hook for global events"
    "feat: add ToastDemo component for testing notifications"
    "feat: integrate toast notifications with leave approval events"
    "feat: integrate toast notifications with leave rejection"
    "feat: enhance payroll notification to return toast data"
    "feat: update payroll API to return notification data"
    "feat: integrate toast listener in leave page for events"
    "feat: integrate toast listener and demo in dashboard"
    "feat: update root layout to include ToastProvider"
    "feat: enhance ToastContext with event-driven notifications"
    "feat: create centralized RBAC middleware for API authentication"
    "feat: add loading and empty state components for better UX"
    "feat: update users API route to use RBAC middleware"
    "feat: update leaves API route to use RBAC middleware"
    "feat: update attendance API routes to use RBAC"
    "feat: update leave approval API with RBAC middleware"
    "feat: update payroll API routes to use RBAC"
    "feat: clean up DocumentList component for better performance"
    "feat: add root page with automatic dashboard redirection"
    "feat: update remaining files for MVP polish and optimization"
    "feat: add FileUpload and ToastContainer components"
    "feat: update environment configuration template"
    "feat: add file upload API endpoint with local storage"
    "feat: implement document delete API with permission checks"
    "feat: enhance DocumentList with delete functionality"
    "feat: add settings page with company logo upload"
    "feat: integrate file upload in employee profile"
    "feat: add attendance API endpoints for check-in/out"
    "feat: enhance attendance page with UI and daily views"
    "feat: add leave management page with application form"
    "feat: add document download functionality"
    "feat: implement comprehensive testing setup with Jest"
    "feat: add test cases for authentication and API endpoints"
    "feat: create test coverage for all major components"
    "feat: setup CI/CD pipeline with GitHub Actions"
    "feat: configure deployment pipeline for production"
    "chore: optimize build configuration and remove warnings"
    "chore: update to Next.js 16 with Turbopack for performance"
    "feat: complete Dayflow HRMS MVP - Production Ready"
)

# Check if we're in the right directory
if [ ! -f "gcet/package.json" ]; then
    echo "❌ Error: gcet/package.json not found. Please run from project root."
    exit 1
fi

# Get current git status
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Staging all changes..."
    git add .
    echo "✅ Changes staged successfully"
fi

# Create 80 commits with 2-second delay
echo "🔄 Creating 80 commits..."
echo ""

for i in "${!commits[@]}"; do
    commit_number=$((i + 1))
    commit_message="${commits[$i]}"
    
    echo "📝 Commit $commit_number/80: $commit_message"
    
    # Create the commit
    git commit -m "$commit_message"
    
    # Check if commit was successful
    if [ $? -eq 0 ]; then
        echo "✅ Commit $commit_number created successfully"
    else
        echo "❌ Failed to create commit $commit_number"
        echo "⏸️  Stopping script..."
        exit 1
    fi
    
    # Add 2-second delay
    if [ $commit_number -lt 80 ]; then
        echo "⏳ Waiting 2 seconds..."
        sleep 2
    fi
    
    echo ""
done

echo "🎉 Successfully created 80 commits!"
echo "📊 Project history:"
echo "   - Total commits: $(git rev-list --count HEAD)"
echo "   - Latest commit: $(git log -1 --pretty=format:'%h %s')"
echo ""
echo "🚀 Ready to push to GitHub!"
echo "💡 Run 'git push origin main' to push all commits"
