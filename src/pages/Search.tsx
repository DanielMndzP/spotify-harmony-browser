
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '../components/ui/input';
import { ArtistCard } from '../components/ArtistCard';
import { AlbumCard } from '../components/AlbumCard';
import { TrackList } from '../components/TrackList';

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Mock search results
  const searchResults = {
    artists: [
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
      }
    ],
    albums: [
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
      }
    ],
    tracks: [
      {
        id: '1',
        name: 'As It Was',
        artist: 'Harry Styles',
        album: "Harry's House",
        duration_ms: 167000
      },
      {
        id: '2',
        name: 'Anti-Hero',
        artist: 'Taylor Swift',
        album: 'Midnights',
        duration_ms: 200000
      },
      {
        id: '3',
        name: 'Music for a Sushi Restaurant',
        artist: 'Harry Styles',
        album: "Harry's House",
        duration_ms: 193000
      }
    ]
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'artists', label: 'Artists' },
    { id: 'albums', label: 'Albums' },
    { id: 'tracks', label: 'Songs' }
  ];

  const browseCategories = [
    { name: 'Pop', color: 'bg-pink-500', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
    { name: 'Hip-Hop', color: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Rock', color: 'bg-red-500', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Indie', color: 'bg-blue-500', image: 'https://images.unsplash.com/photo-1494790108755-2616c56a54db?w=300&h=300&fit=crop' },
    { name: 'Electronic', color: 'bg-purple-500', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
    { name: 'Classical', color: 'bg-green-500', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }
  ];

  return (
    <div className="p-6">
      <div className="max-w-md mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 bg-spotify-dark-gray border-none text-white placeholder:text-muted-foreground h-12"
          />
        </div>
      </div>

      {query ? (
        <div className="space-y-8">
          {/* Search Tabs */}
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'bg-spotify-gray text-white hover:bg-spotify-dark-gray'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Results */}
          {(activeTab === 'all' || activeTab === 'artists') && searchResults.artists.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Artists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {searchResults.artists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            </section>
          )}

          {(activeTab === 'all' || activeTab === 'albums') && searchResults.albums.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Albums</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {searchResults.albums.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
            </section>
          )}

          {(activeTab === 'all' || activeTab === 'tracks') && searchResults.tracks.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Songs</h2>
              <div className="bg-card rounded-lg">
                <TrackList tracks={searchResults.tracks} />
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Browse all</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {browseCategories.map((category) => (
                <div
                  key={category.name}
                  className={`${category.color} rounded-lg p-4 h-32 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
                >
                  <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute -bottom-2 -right-2 w-16 h-16 rotate-12 rounded"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
