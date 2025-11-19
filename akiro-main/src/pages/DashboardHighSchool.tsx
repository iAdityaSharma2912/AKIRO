import React from 'react';
import { useUser } from '@/contexts/UserContext';
import { SubjectSidebar } from '@/components/SubjectSidebar';
import { RoadmapTimeline } from '@/components/RoadmapTimeline';
import { CalendarWidget } from '@/components/CalendarWidget';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import { FileText, MessageCircle } from 'lucide-react';

const DashboardHighSchool = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-muted-foreground">Continue your high school learning journey</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Previous Papers
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
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Subjects */}
          <div className="lg:col-span-1">
            <SubjectSidebar />
          </div>

          {/* Center - Roadmap */}
          <div className="lg:col-span-2">
            <RoadmapTimeline />
          </div>

          {/* Right Sidebar - Calendar */}
          <div className="lg:col-span-1">
            <CalendarWidget />
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <ChatbotWidget />
    </div>
  );
};

export default DashboardHighSchool;