import React from 'react';
import { useUser } from '@/contexts/UserContext';
import { GovtExamSection } from '@/components/GovtExamSection';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import { MessageCircle, BookOpen, Award } from 'lucide-react';

const DashboardGraduate = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
            <p className="text-muted-foreground">Excel in competitive exams with {user?.mastersDegree}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Exam Resources
            </Button>
            <Button variant="outline" size="sm">
              <Award className="w-4 h-4 mr-2" />
              Mock Tests
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
        <GovtExamSection />
      </div>

      {/* Floating Chatbot */}
      <ChatbotWidget />
    </div>
  );
};

export default DashboardGraduate;