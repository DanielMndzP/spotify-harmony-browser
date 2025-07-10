
import React from 'react';
import { ArtistCard } from '../components/ArtistCard';
import { AlbumCard } from '../components/AlbumCard';

export const Dashboard: React.FC = () => {
  // Mock data - in real app this would come from API
  const topArtists = [
    {
      id: '1',
      name: 'Harry Styles',
      images: [{ url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' }],
      genres: ['pop', 'rock'],
      followers: { total: 45000000 }
    },
    {
      id: '2',
      name: 'Taylor Swift',
      images: [{ url: 'https://images.unsplash.com/photo-1494790108755-2616c56a54db?w=300&h=300&fit=crop' }],
      genres: ['pop', 'country'],
      followers: { total: 50000000 }
    },
    {
      id: '3',
      name: 'The Weeknd',
      images: [{ url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }],
      genres: ['r&b', 'pop'],
      followers: { total: 35000000 }
    },
    {
      id: '4',
      name: 'Billie Eilish',
      images: [{ url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' }],
      genres: ['alternative', 'pop'],
      followers: { total: 40000000 }
    },
    {
      id: '5',
      name: 'Ed Sheeran',
      images: [{ url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' }],
      genres: ['pop', 'folk'],
      followers: { total: 42000000 }
    }
  ];

  const recentlyPlayed = [
    {
      id: '1',
      name: "Harry's House",
      artist: 'Harry Styles',
      images: [{ url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' }],
      release_date: '2022-05-20',
      total_tracks: 13
    },
    {
      id: '2',
      name: 'Midnights',
      artist: 'Taylor Swift',
      images: [{ url: 'https://images.unsplash.com/photo-1494790108755-2616c56a54db?w=300&h=300&fit=crop' }],
      release_date: '2022-10-21',
      total_tracks: 13
    },
    {
      id: '3',
      name: 'After Hours',
      artist: 'The Weeknd',
      images: [{ url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }],
      release_date: '2020-03-20',
      total_tracks: 14
    }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="p-6 space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-white mb-6">{getGreeting()}</h1>
        
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {recentlyPlayed.slice(0, 6).map((album) => (
            <div key={album.id} className="bg-spotify-gray rounded-lg flex items-center gap-4 spotify-card-hover group cursor-pointer">
              <img
                src={album.images[0]?.url}
                alt={album.name}
                className="w-16 h-16 rounded-l-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{album.name}</p>
              </div>
              <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity mr-4">
                <Music className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Top Artists */}
      <section className="animate-slide-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Your top artists this month</h2>
          <button className="text-muted-foreground hover:text-white text-sm font-medium">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {topArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="animate-slide-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Recently played</h2>
          <button className="text-muted-foreground hover:text-white text-sm font-medium">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recentlyPlayed.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>
    </div>
  );
};
