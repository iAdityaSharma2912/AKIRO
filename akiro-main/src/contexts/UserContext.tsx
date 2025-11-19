import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserData {
  name: string;
  email: string;
  phone: string;
  education: 'High School' | 'Undergraduate' | 'Graduate';
  // Undergraduate specific
  collegeName?: string;
  degree?: string;
  passingYear?: string;
  rollNumber?: string;
  // Graduate specific
  mastersDegree?: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const isAuthenticated = user !== null;

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};