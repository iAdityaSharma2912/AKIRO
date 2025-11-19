import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, MessageSquare, Calculator, CheckCircle, PlayCircle, Clock, Award, BookOpen } from 'lucide-react';

interface ExamTrack {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  progress: number;
  totalTests: number;
  completedTests: number;
  topics: string[];
  color: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const examTracks: ExamTrack[] = [
  {
    id: 'aptitude',
    title: 'Quantitative Aptitude',
    description: 'Mathematical problem-solving and numerical reasoning',
    icon: Calculator,
    progress: 70,
    totalTests: 15,
    completedTests: 10,
    topics: ['Number Systems', 'Percentages', 'Profit & Loss', 'Time & Work', 'Geometry'],
    color: 'bg-blue-100 text-blue-800',
    difficulty: 'Intermediate'
  },
  {
    id: 'reasoning',
    title: 'Logical Reasoning',
    description: 'Analytical thinking and logical problem-solving',
    icon: Brain,
    progress: 55,
    totalTests: 12,
    completedTests: 7,
    topics: ['Puzzles', 'Blood Relations', 'Coding-Decoding', 'Seating Arrangement'],
    color: 'bg-purple-100 text-purple-800',
    difficulty: 'Advanced'
  },
  {
    id: 'verbal',
    title: 'Verbal Ability',
    description: 'English comprehension and communication skills',
    icon: MessageSquare,
    progress: 40,
    totalTests: 10,
    completedTests: 4,
    topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Para Jumbles'],
    color: 'bg-green-100 text-green-800',
    difficulty: 'Beginner'
  }
];

const getStatusIcon = (progress: number) => {
  if (progress >= 70) return <CheckCircle className="w-5 h-5 text-accent" />;
  if (progress >= 40) return <PlayCircle className="w-5 h-5 text-primary" />;
  return <Clock className="w-5 h-5 text-muted-foreground" />;
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'Advanced': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const GovtExamSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Government Exam Preparation</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master competitive government exams with our comprehensive preparation tracks. 
          Perfect for <span className="text-primary font-semibold">graduate students</span> aiming for civil services and public sector roles.
        </p>
      </div>

      {/* Exam Track Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {examTracks.map((track) => (
          <Card key={track.id} className="card-interactive h-full">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-2">
                <div className={`p-3 rounded-lg ${track.color}`}>
                  <track.icon className="w-6 h-6" />
                </div>
                {getStatusIcon(track.progress)}
              </div>
              <CardTitle className="text-xl">{track.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {track.description}
              </p>
              <Badge className={`w-fit ${getDifficultyColor(track.difficulty)}`}>
                {track.difficulty}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Progress Section */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {track.completedTests}/{track.totalTests} tests
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

              {/* Topics Section */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Key Topics</p>
                <div className="flex flex-wrap gap-2">
                  {track.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {track.progress > 0 ? (
                  <Button className="btn-primary w-full">
                    Continue Practice
                  </Button>
                ) : (
                  <Button className="btn-primary w-full">
                    Start Preparation
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Quiz Assignment */}
      <Card className="card-elevated bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Weekly Quiz Challenge</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Test your preparation with our comprehensive weekly quizzes. 
              Get detailed performance analysis and improve your weak areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="btn-primary">
                <PlayCircle className="w-4 h-4 mr-2" />
                Take Weekly Quiz
              </Button>
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                View Past Results
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Schedule */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Study Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Morning Session</span>
                <span className="text-sm text-muted-foreground">9:00 AM - 11:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Afternoon Practice</span>
                <span className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Evening Revision</span>
                <span className="text-sm text-muted-foreground">7:00 PM - 9:00 PM</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Customize Schedule
            </Button>
          </CardContent>
        </Card>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievement Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Completed 50 Practice Tests</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">7-day Study Streak</span>
              </div>
              <div className="flex items-center gap-3">
                <PlayCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Aptitude Mastery Badge</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Weekly Quiz Champion</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              View All Achievements
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};