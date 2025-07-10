
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface Album {
  id: string;
  name: string;
  artist: string;
  images: Array<{ url: string }>;
  release_date: string;
  total_tracks: number;
}

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`} className="block">
      <div className="bg-card p-4 rounded-lg spotify-card-hover group">
        <div className="relative mb-4">
          <img
            src={album.images[0]?.url || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'}
            alt={album.name}
            className="w-full aspect-square object-cover rounded-lg"
          />
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black">
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-white text-lg mb-1 truncate">
          {album.name}
        </h3>
        <p className="text-muted-foreground text-sm truncate">
          {album.artist}
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          {new Date(album.release_date).getFullYear()} • {album.total_tracks} tracks
        </p>
      </div>
    </Link>
  );
};
