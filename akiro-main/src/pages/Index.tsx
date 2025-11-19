import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, Award, BookOpen, Brain, Zap } from "lucide-react";
import akiroHero from '@/assets/akiro-hero.png';
import focusedImage from '@/assets/undraw-focused.svg';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized study plans adapted to your learning style and pace"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Content",
      description: "Complete coverage for High School, Undergraduate, and Graduate levels"
    },
    {
      icon: Award,
      title: "Exam Preparation",
      description: "Specialized tracks for competitive exams and career readiness"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Always-available AI chatbot for instant help and guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation with Theme Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-primary">AKIRO</span>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Meet <span className="text-primary">AKIRO</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  Your AI Learning Companion
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Personalized education paths for every learner. From high school to graduate studies, 
                  master your subjects with AI-powered guidance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/login')}
                  className="btn-primary text-lg px-8 py-4"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button 
                  variant="outline" 
                  className="text-lg px-8 py-4"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={akiroHero} 
                alt="AKIRO AI Learning Companion Hero"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose AKIRO?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets educational excellence to create the perfect learning experience
            </p>
          </div>
          
          {/* Focused learning illustration */}
          <div className="flex justify-center mb-12">
            <img 
              src={focusedImage} 
              alt="Focused learning illustration"
              className="w-80 h-auto opacity-60"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-interactive text-center h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="card-elevated bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students who are already excelling with AKIRO's personalized AI learning platform.
              </p>
              <Button 
                onClick={() => navigate('/login')}
                className="btn-primary text-lg px-12 py-4"
              >
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
