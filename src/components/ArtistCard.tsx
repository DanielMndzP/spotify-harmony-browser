
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  images: Array<{ url: string }>;
  genres: string[];
  followers: { total: number };
}

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className="block">
      <div className="bg-card p-4 rounded-lg spotify-card-hover group">
        <div className="relative mb-4">
          <img
            src={artist.images[0]?.url || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'}
            alt={artist.name}
            className="w-full aspect-square object-cover rounded-full"
          />
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black">
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-white text-lg mb-1 truncate">
          {artist.name}
        </h3>
        <p className="text-muted-foreground text-sm">
          {artist.genres.slice(0, 2).join(', ') || 'Artist'}
        </p>
      </div>
    </Link>
  );
};
