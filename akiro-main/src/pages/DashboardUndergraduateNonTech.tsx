import React from 'react';
import { useUser } from '@/contexts/UserContext';
import { NonTechRoadmapSection } from '@/components/NonTechRoadmapSection';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, FileSpreadsheet } from 'lucide-react';

const DashboardUndergraduateNonTech = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
            <p className="text-muted-foreground">Build your career with {user?.degree} skills</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4 mr-2" />
              HR Skills
            </Button>
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              MS Tools
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
        <NonTechRoadmapSection />
      </div>

      {/* Floating Chatbot */}
      <ChatbotWidget />
    </div>
  );
};

export default DashboardUndergraduateNonTech;