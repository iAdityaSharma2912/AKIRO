import React from 'react';
import { useUser } from '@/contexts/UserContext';
import { JobPortalSection } from '@/components/JobPortalSection';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import { FileText, MessageCircle, Briefcase } from 'lucide-react';

const DashboardUndergraduateTech = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
            <p className="text-muted-foreground">Launch your tech career with {user?.degree}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Briefcase className="w-4 h-4 mr-2" />
              Job Portal
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Resume Builder
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              24x7 Support
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <JobPortalSection />
      </div>

      {/* Floating Chatbot */}
      <ChatbotWidget />
    </div>
  );
};

export default DashboardUndergraduateTech;