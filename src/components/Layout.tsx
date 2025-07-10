
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Player } from './Player';

export const Layout: React.FC = () => {
  return (
    <div className="h-screen bg-spotify-black flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Navigation />
        <main className="flex-1 overflow-auto custom-scrollbar">
          <Outlet />
        </main>
      </div>
      <Player />
    </div>
  );
};
