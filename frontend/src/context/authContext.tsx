import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { login, logout } from '../api/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const loginHandler = async (username: string, password: string) => {
    try {
      await login(username, password);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const logoutHandler = async () => {
    await logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
