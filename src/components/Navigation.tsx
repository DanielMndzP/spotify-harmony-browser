
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Heart, Plus, Music } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

export const Navigation: React.FC = () => {
  const { user, logout } = useAuth();

  const navItems = [
    { to: '/dashboard', icon: Home, label: 'Home' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/library', icon: Library, label: 'Your Library' },
  ];

  return (
    <div className="w-64 bg-spotify-black p-6 flex flex-col">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-8">
          <Music className="w-8 h-8 text-spotify-green" />
          <span className="text-white text-xl font-bold">Spotify Clone</span>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-spotify-gray text-white'
                    : 'text-muted-foreground hover:text-white hover:bg-spotify-gray'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mb-6 space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-4 text-muted-foreground hover:text-white">
          <Plus className="w-5 h-5" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-4 text-muted-foreground hover:text-white">
          <Heart className="w-5 h-5" />
          Liked Songs
        </Button>
      </div>

      <div className="mt-auto">
        {user && (
          <div className="flex items-center gap-3 p-3 rounded-lg bg-spotify-dark-gray">
            <img
              src={user.images[0]?.url}
              alt={user.display_name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {user.display_name}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="text-muted-foreground hover:text-white"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
