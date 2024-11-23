import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { login, logout } from '../api/authService';

// Định nghĩa kiểu AuthContext
export interface AuthContextType {
  role: string;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Tạo context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook để sử dụng context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component để cung cấp context cho các component con
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<string>('employee'); // Khởi tạo role mặc định là 'employee'

  const loginHandler = async (username: string, password: string) => {
    try {
      await login(username, password); // Gọi API đăng nhập
      setIsAuthenticated(true);
      setRole('admin'); // Sau khi đăng nhập thành công, set role là 'admin'
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const logoutHandler = async () => {
    await logout(); // Gọi API đăng xuất
    setIsAuthenticated(false);
    setRole('employee'); // Đặt lại role về mặc định sau khi đăng xuất
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Nếu có token trong localStorage, đánh dấu đã đăng nhập
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
