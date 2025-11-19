import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import robotImage from '@/assets/robot-interaction.jpg';

const ConfirmationGraduate = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    mastersDegree: '',
    collegeName: '',
    passingYear: '',
    rollNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.mastersDegree || !formData.collegeName || !formData.passingYear || !formData.rollNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Update user data
    const updatedUser = { ...user!, ...formData };
    setUser(updatedUser);

    setTimeout(() => {
      toast({
        title: "Profile Updated!",
        description: "Your graduate details have been saved."
      });
      navigate('/dashboard/graduate');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${robotImage})` }}
      />
      <div className="max-w-md w-full relative z-10">
        <Card className="card-elevated">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Tell us about your graduate studies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mastersDegree">Master's Degree *</Label>
                <Input
                  id="mastersDegree"
                  type="text"
                  value={formData.mastersDegree}
                  onChange={(e) => setFormData(prev => ({ ...prev, mastersDegree: e.target.value }))}
                  placeholder="e.g., M.Tech, MBA, M.Com, MA"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="collegeName">College/University Name *</Label>
                <Input
                  id="collegeName"
                  type="text"
                  value={formData.collegeName}
                  onChange={(e) => setFormData(prev => ({ ...prev, collegeName: e.target.value }))}
                  placeholder="Enter your college or university name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="passingYear">Passing Year *</Label>
                <Input
                  id="passingYear"
                  type="number"
                  min="2020"
                  max="2030"
                  value={formData.passingYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, passingYear: e.target.value }))}
                  placeholder="e.g., 2024"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rollNumber">University Roll Number *</Label>
                <Input
                  id="rollNumber"
                  type="text"
                  value={formData.rollNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, rollNumber: e.target.value }))}
                  placeholder="Enter your university roll number"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Continue to Dashboard'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmationGraduate;