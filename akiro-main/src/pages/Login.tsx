import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { LoginForm } from '@/components/LoginForm';
import akiroMascot from '@/assets/akiro-mascot.png';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    
    if (userData.education === 'High School') {
      navigate('/dashboard/highschool');
    } else if (userData.education === 'Undergraduate') {
      navigate('/confirmation/undergraduate');
    } else if (userData.education === 'Graduate') {
      navigate('/confirmation/graduate');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Mascot/Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <img 
            src={akiroMascot} 
            alt="AKIRO AI Learning Companion Mascot"
            className="w-80 h-80 object-contain mb-6"
          />
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to <span className="text-primary">AKIRO</span>
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-md">
            Your personalized AI learning companion, designed to help you succeed at every educational level.
          </p>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome to <span className="text-primary">AKIRO</span>
            </h1>
            <p className="text-muted-foreground">
              Your AI learning companion
            </p>
          </div>
          
          <LoginForm onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
};

export default Login;