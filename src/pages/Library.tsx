
import React, { useState } from 'react';
import { Search, List, Grid3X3, Plus, ArrowUpDown, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { AlbumCard } from '../components/AlbumCard';

export const Library: React.FC = () => {
  const [view, setView] = useState<'list' | 'grid'>('grid');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['all', 'playlists', 'artists', 'albums'];

  const libraryItems = [
    {
      id: '1',
      type: 'playlist',
      name: 'Liked Songs',
      description: '234 songs',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
      id: '2',
      type: 'album',
      name: "Harry's House",
      artist: 'Harry Styles',
      images: [{ url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' }],
      release_date: '2022-05-20',
      total_tracks: 13
    },
    {
      id: '3',
      type: 'album',
      name: 'Midnights',
      artist: 'Taylor Swift',
      images: [{ url: 'https://images.unsplash.com/photo-1494790108755-2616c56a54db?w=300&h=300&fit=crop' }],
      release_date: '2022-10-21',
      total_tracks: 13
    },
    {
      id: '4',
      type: 'playlist',
      name: 'My Playlist #1',
      description: '12 songs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      id: '5',
      type: 'album',
      name: 'After Hours',
      artist: 'The Weeknd',
      images: [{ url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }],
      release_date: '2020-03-20',
      total_tracks: 14
    }
  ];

  const filteredItems = libraryItems.filter(item => {
    if (filter !== 'all' && item.type !== filter.slice(0, -1)) return false;
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Your Library</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
          >
            {view === 'grid' ? <List className="w-4 h-4" /> : <Grid3X3 className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="space-y-4 mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search in Your Library"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-spotify-dark-gray border-none text-white placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-2">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setFilter(filterOption)}
              className={filter === filterOption ? 'bg-white text-black' : 'text-white'}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Recently added
          </Button>
        </div>
      </div>

      {/* Library content */}
      {view === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredItems.map((item) => {
            if (item.type === 'album') {
              return <AlbumCard key={item.id} album={item as any} />;
            }
            
            return (
              <div key={item.id} className="bg-card p-4 rounded-lg spotify-card-hover group">
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black">
                      <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-lg mb-1 truncate">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.type === 'playlist' ? 'Playlist' : 'Album'} • {item.description}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-2 rounded track-hover">
              <img
                src={item.type === 'album' ? (item as any).images[0]?.url : item.image}
                alt={item.name}
                className="w-12 h-12 rounded"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{item.name}</p>
                <p className="text-muted-foreground text-sm truncate">
                  {item.type === 'album' ? `Album • ${(item as any).artist}` : `Playlist • ${item.description}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
