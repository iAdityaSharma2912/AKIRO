import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, DollarSign, Clock, Code, Database, Brain, Smartphone, FileText } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  skills: string[];
  posted: string;
  icon: React.ComponentType<any>;
  description: string;
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'MERN Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Bangalore',
    salary: '₹6-12 LPA',
    type: 'Full-time',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    posted: '2 days ago',
    icon: Code,
    description: 'Build scalable web applications using the MERN stack'
  },
  {
    id: '2',
    title: 'Java Developer',
    company: 'Enterprise Systems',
    location: 'Pune',
    salary: '₹5-10 LPA',
    type: 'Full-time',
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    posted: '1 day ago',
    icon: Database,
    description: 'Develop enterprise-level applications using Java technologies'
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'InnovateLabs',
    location: 'Hyderabad',
    salary: '₹7-15 LPA',
    type: 'Full-time',
    skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
    posted: '3 days ago',
    icon: Code,
    description: 'Create innovative solutions using modern technologies'
  },
  {
    id: '4',
    title: 'AI/ML Developer',
    company: 'DataScience Pro',
    location: 'Chennai',
    salary: '₹8-18 LPA',
    type: 'Full-time',
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
    posted: '1 week ago',
    icon: Brain,
    description: 'Build intelligent systems using machine learning algorithms'
  },
  {
    id: '5',
    title: 'Mobile App Developer',
    company: 'AppVentures',
    location: 'Mumbai',
    salary: '₹6-14 LPA',
    type: 'Full-time',
    skills: ['React Native', 'Flutter', 'Android', 'iOS'],
    posted: '5 days ago',
    icon: Smartphone,
    description: 'Develop cross-platform mobile applications'
  },
  {
    id: '6',
    title: 'Frontend Developer',
    company: 'WebCrafters',
    location: 'Delhi NCR',
    salary: '₹5-11 LPA',
    type: 'Full-time',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    posted: '4 days ago',
    icon: Code,
    description: 'Create beautiful and responsive user interfaces'
  }
];

export const JobPortalSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Top IT Jobs for You</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover exciting career opportunities in technology. These positions are perfect for {' '}
          <span className="text-primary font-semibold">B.Tech and BCA graduates</span> ready to start their professional journey.
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="card-interactive h-full">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <job.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {job.type}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {job.description}
              </p>

              {/* Job Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-accent">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{job.posted}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Required Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <Button className="btn-primary w-full">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-8">
        <Card className="card-elevated bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
            <p className="text-muted-foreground mb-6">
              Build a standout resume and get personalized job recommendations based on your skills and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                <FileText className="w-4 h-4 mr-2" />
                Build Resume
              </Button>
              <Button variant="outline">
                <Building className="w-4 h-4 mr-2" />
                View All Jobs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};