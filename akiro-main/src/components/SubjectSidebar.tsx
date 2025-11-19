import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Atom, FlaskConical, PiggyBank, TrendingUp, Scale } from 'lucide-react';

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'bg-blue-100 text-blue-800', progress: 75 },
  { name: 'Physics', icon: Atom, color: 'bg-purple-100 text-purple-800', progress: 60 },
  { name: 'Chemistry', icon: FlaskConical, color: 'bg-green-100 text-green-800', progress: 80 },
  { name: 'Accounts', icon: PiggyBank, color: 'bg-yellow-100 text-yellow-800', progress: 55 },
  { name: 'Economics', icon: TrendingUp, color: 'bg-red-100 text-red-800', progress: 70 },
  { name: 'Political Science', icon: Scale, color: 'bg-indigo-100 text-indigo-800', progress: 65 }
];

export const SubjectSidebar: React.FC = () => {
  return (
    <Card className="card-elevated">
      <CardHeader>
        <CardTitle className="text-lg">Important Subjects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject) => (
          <div 
            key={subject.name}
            className="card-interactive cursor-pointer p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${subject.color}`}>
                <subject.icon className="w-4 h-4" />
              </div>
              <span className="font-medium">{subject.name}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{subject.progress}%</span>
              </div>
              <div className="progress-bar h-2">
                <div 
                  className="progress-fill" 
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};