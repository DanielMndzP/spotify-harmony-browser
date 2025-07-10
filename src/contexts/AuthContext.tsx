
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  display_name: string;
  email: string;
  images: Array<{ url: string }>;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing authentication
    const checkAuth = () => {
      const savedUser = localStorage.getItem('spotify_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };

    setTimeout(checkAuth, 1000); // Simulate API call delay
  }, []);

  const login = () => {
    // Simulate Spotify OAuth flow
    const mockUser: User = {
      id: 'user123',
      display_name: 'John Doe',
      email: 'john.doe@example.com',
      images: [{ url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }]
    };
    
    setUser(mockUser);
    localStorage.setItem('spotify_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('spotify_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
