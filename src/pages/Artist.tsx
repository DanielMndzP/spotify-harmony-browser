
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Heart, MoreHorizontal, Verified } from 'lucide-react';
import { Button } from '../components/ui/button';
import { AlbumCard } from '../components/AlbumCard';
import { TrackList } from '../components/TrackList';

export const Artist: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock artist data
  const artist = {
    id,
    name: 'Harry Styles',
    images: [{ url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop' }],
    genres: ['pop', 'rock'],
    followers: { total: 45000000 },
    verified: true
  };

  const topTracks = [
    {
      id: '1',
      name: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 167000
    },
    {
      id: '2',
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line',
      duration_ms: 174000
    },
    {
      id: '3',
      name: 'Golden',
      artist: 'Harry Styles',
      album: 'Fine Line',
      duration_ms: 208000
    },
    {
      id: '4',
      name: 'Music for a Sushi Restaurant',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 193000
    },
    {
      id: '5',
      name: 'Adore You',
      artist: 'Harry Styles',
      album: 'Fine Line',
      duration_ms: 207000
    }
  ];

  const albums = [
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
      name: 'Fine Line',
      artist: 'Harry Styles',
      images: [{ url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' }],
      release_date: '2019-12-13',
      total_tracks: 12
    },
    {
      id: '3',
      name: 'Harry Styles',
      artist: 'Harry Styles',
      images: [{ url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' }],
      release_date: '2017-05-12',
      total_tracks: 10
    }
  ];

  const formatFollowers = (count: number) => {
    return `${(count / 1000000).toFixed(1)}M`;
  };

  return (
    <div>
      {/* Header with gradient background */}
      <div className="spotify-gradient h-80 p-6 flex items-end">
        <div className="flex items-end gap-6">
          <img
            src={artist.images[0]?.url}
            alt={artist.name}
            className="w-48 h-48 rounded-full shadow-2xl"
          />
          <div className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              {artist.verified && <Verified className="w-6 h-6 text-blue-500" />}
              <span className="text-sm font-medium">Verified Artist</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">{artist.name}</h1>
            <p className="text-white text-lg">
              {formatFollowers(artist.followers.total)} monthly listeners
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <Button className="w-14 h-14 bg-spotify-green hover:bg-spotify-green/90 text-black rounded-full">
            <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
          </Button>
          <Button variant="ghost" size="lg">
            <Heart className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="lg">
            <MoreHorizontal className="w-6 h-6" />
          </Button>
        </div>

        {/* Popular tracks */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Popular</h2>
          <div className="bg-card rounded-lg">
            <TrackList tracks={topTracks} showAlbum={false} />
          </div>
          <Button variant="ghost" className="mt-4 text-muted-foreground">
            Show all
          </Button>
        </section>

        {/* Albums */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Albums</h2>
            <Link to="#" className="text-muted-foreground hover:text-white text-sm font-medium">
              Show all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>

        {/* About */}
        <section className="bg-card rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={artist.images[0]?.url}
                alt={artist.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-muted-foreground">
                {formatFollowers(artist.followers.total)} monthly listeners
              </p>
            </div>
            <div>
              <p className="text-white leading-relaxed">
                Harry Edward Styles is an English singer, songwriter and actor. Known for his work in pop music, 
                Styles has been recognized for his fashion sense and androgyny, and is considered a prominent figure 
                in popular culture. He has received various accolades, including two Grammy Awards.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
