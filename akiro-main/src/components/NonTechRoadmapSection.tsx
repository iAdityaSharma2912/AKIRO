import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Calculator, FileSpreadsheet, TrendingUp, CheckCircle, PlayCircle, Clock } from 'lucide-react';

interface RoadmapTrack {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  progress: number;
  totalModules: number;
  completedModules: number;
  skills: string[];
  color: string;
}

const roadmapTracks: RoadmapTrack[] = [
  {
    id: 'hr',
    title: 'Human Resources',
    description: 'Master recruitment, employee relations, and organizational development',
    icon: Users,
    progress: 65,
    totalModules: 8,
    completedModules: 5,
    skills: ['Recruitment', 'Employee Relations', 'Performance Management', 'Training & Development'],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'accounting',
    title: 'Professional Accounting',
    description: 'Learn advanced accounting principles and financial management',
    icon: Calculator,
    progress: 45,
    totalModules: 10,
    completedModules: 4,
    skills: ['Financial Accounting', 'Cost Accounting', 'Taxation', 'Auditing'],
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'mstools',
    title: 'MS Office Tools',
    description: 'Excel mastery, Word processing, and PowerPoint presentations',
    icon: FileSpreadsheet,
    progress: 80,
    totalModules: 6,
    completedModules: 5,
    skills: ['Advanced Excel', 'Word Processing', 'PowerPoint', 'Data Analysis'],
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'business',
    title: 'Business Analytics',
    description: 'Data-driven decision making and business intelligence',
    icon: TrendingUp,
    progress: 30,
    totalModules: 7,
    completedModules: 2,
    skills: ['Data Analysis', 'Business Intelligence', 'Market Research', 'Reporting'],
    color: 'bg-purple-100 text-purple-800'
  }
];

const getStatusIcon = (progress: number) => {
  if (progress >= 80) return <CheckCircle className="w-5 h-5 text-accent" />;
  if (progress >= 30) return <PlayCircle className="w-5 h-5 text-primary" />;
  return <Clock className="w-5 h-5 text-muted-foreground" />;
};

export const NonTechRoadmapSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Non-Tech Career Roadmaps</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Build expertise in high-demand non-technical fields. Perfect for {' '}
          <span className="text-primary font-semibold">BBA, B.Com, and BA graduates</span> looking to excel in business and management roles.
        </p>
      </div>

      {/* Roadmap Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {roadmapTracks.map((track) => (
          <Card key={track.id} className="card-interactive h-full">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${track.color}`}>
                    <track.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {track.description}
                    </p>
                  </div>
                </div>
                {getStatusIcon(track.progress)}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Progress Section */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {track.completedModules}/{track.totalModules} modules
                  </span>
                </div>
                <div className="progress-bar h-3">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${track.progress}%` }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-accent">{track.progress}% Complete</span>
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Key Skills You'll Learn</p>
                <div className="flex flex-wrap gap-2">
                  {track.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {track.progress > 0 ? (
                  <Button className="btn-primary w-full">
                    Continue Learning
                  </Button>
                ) : (
                  <Button className="btn-primary w-full">
                    Start Learning
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="grid md:grid-cols-2 gap-6 pt-8">
        <Card className="card-elevated bg-gradient-to-br from-accent/5 to-primary/5">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Excel Learning Pattern</h3>
            <p className="text-muted-foreground mb-4">
              Master Microsoft Excel from basics to advanced data analysis and automation.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Basic Formulas & Functions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Data Visualization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <PlayCircle className="w-4 h-4 text-primary" />
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>VBA & Automation</span>
              </div>
            </div>
            <Button className="btn-accent w-full">
              Start Excel Mastery
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elevated bg-gradient-to-br from-warning/5 to-primary/5">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Professional Certification</h3>
            <p className="text-muted-foreground mb-4">
              Earn industry-recognized certifications to boost your career prospects.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="text-xs">HR Certification</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="text-xs">Excel Expert</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="text-xs">Business Analytics</Badge>
              </div>
            </div>
            <Button className="btn-warning w-full">
              View Certifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};