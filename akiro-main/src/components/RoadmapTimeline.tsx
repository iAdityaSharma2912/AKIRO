import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, PlayCircle, BookOpen, FileText } from 'lucide-react';

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'assignment' | 'lesson';
  status: 'completed' | 'current' | 'upcoming';
  dueDate?: string;
  points?: number;
}

const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Mathematics Quiz - Algebra Basics',
    description: 'Test your understanding of algebraic expressions and equations',
    type: 'quiz',
    status: 'completed',
    points: 85
  },
  {
    id: '2',
    title: 'Physics Assignment - Motion and Forces',
    description: 'Solve problems related to Newton\'s laws of motion',
    type: 'assignment',
    status: 'current',
    dueDate: 'Tomorrow',
    points: 100
  },
  {
    id: '3',
    title: 'Chemistry Lesson - Chemical Bonding',
    description: 'Understanding ionic and covalent bonds',
    type: 'lesson',
    status: 'current'
  },
  {
    id: '4',
    title: 'Economics Quiz - Demand and Supply',
    description: 'Market dynamics and equilibrium concepts',
    type: 'quiz',
    status: 'upcoming',
    dueDate: 'Next Week'
  },
  {
    id: '5',
    title: 'Accounts Assignment - Financial Statements',
    description: 'Prepare balance sheet and income statement',
    type: 'assignment',
    status: 'upcoming',
    dueDate: 'Next Week'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-accent" />;
    case 'current':
      return <PlayCircle className="w-5 h-5 text-primary" />;
    default:
      return <Clock className="w-5 h-5 text-muted-foreground" />;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'quiz':
      return <FileText className="w-4 h-4" />;
    case 'assignment':
      return <BookOpen className="w-4 h-4" />;
    default:
      return <PlayCircle className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-accent/10 text-accent';
    case 'current':
      return 'bg-primary/10 text-primary';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const RoadmapTimeline: React.FC = () => {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="text-lg">Learning Roadmap</CardTitle>
        <p className="text-sm text-muted-foreground">
          Your systematic path to academic success
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {roadmapData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${item.status}`}
            >
              <div className="card-interactive">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    <div className="flex items-center gap-1">
                      {getTypeIcon(item.type)}
                      <span className="capitalize">{item.type}</span>
                    </div>
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {item.dueDate && (
                      <span>Due: {item.dueDate}</span>
                    )}
                    {item.points && (
                      <span>Points: {item.points}</span>
                    )}
                  </div>
                  
                  {item.status === 'current' && (
                    <Button size="sm" className="btn-primary">
                      {item.type === 'lesson' ? 'Start Learning' : 'Take Now'}
                    </Button>
                  )}
                  
                  {item.status === 'completed' && (
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};