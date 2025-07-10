
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Music } from 'lucide-react';

export const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-spotify-green to-spotify-black flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-spotify-black rounded-xl p-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Music className="w-12 h-12 text-spotify-green" />
          <h1 className="text-3xl font-bold text-white">Spotify Clone</h1>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to Spotify Clone
            </h2>
            <p className="text-muted-foreground">
              Discover and listen to your favorite music
            </p>
          </div>
          
          <Button
            onClick={login}
            className="w-full bg-spotify-green hover:bg-spotify-green/90 text-black font-semibold py-3 rounded-full text-lg"
          >
            Log in with Spotify
          </Button>
          
          <div className="text-xs text-muted-foreground">
            By logging in, you agree to Spotify's Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};
