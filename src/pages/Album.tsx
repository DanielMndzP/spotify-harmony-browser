
import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TrackList } from '../components/TrackList';

export const Album: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock album data
  const album = {
    id,
    name: "Harry's House",
    artist: 'Harry Styles',
    images: [{ url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' }],
    release_date: '2022-05-20',
    total_tracks: 13,
    type: 'Album',
    duration_ms: 2580000
  };

  const tracks = [
    {
      id: '1',
      name: 'Music for a Sushi Restaurant',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 193000
    },
    {
      id: '2',
      name: 'Late Night Talking',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 177000
    },
    {
      id: '3',
      name: 'Grapejuice',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 203000
    },
    {
      id: '4',
      name: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 167000
    },
    {
      id: '5',
      name: 'Daylight',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 218000
    },
    {
      id: '6',
      name: 'Little Freak',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 202000
    },
    {
      id: '7',
      name: 'Matilda',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 244000
    },
    {
      id: '8',
      name: 'Cinema',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 193000
    },
    {
      id: '9',
      name: 'Daydreaming',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 178000
    },
    {
      id: '10',
      name: 'Keep Driving',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 143000
    },
    {
      id: '11',
      name: 'Satellite',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 182000
    },
    {
      id: '12',
      name: 'Boyfriends',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 201000
    },
    {
      id: '13',
      name: 'Love of My Life',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 279000
    }
  ];

  const formatDuration = (ms: number) => {
    const totalMinutes = Math.floor(ms / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    if (hours > 0) {
      return `${hours} hr ${minutes} min`;
    }
    return `${minutes} min`;
  };

  return (
    <div>
      {/* Header with gradient background */}
      <div className="spotify-gradient h-80 p-6 flex items-end">
        <div className="flex items-end gap-6">
          <img
            src={album.images[0]?.url}
            alt={album.name}
            className="w-48 h-48 rounded-lg shadow-2xl"
          />
          <div className="pb-4">
            <p className="text-sm font-medium mb-2">{album.type}</p>
            <h1 className="text-6xl font-bold text-white mb-4">{album.name}</h1>
            <div className="flex items-center gap-2 text-white">
              <span className="font-semibold">{album.artist}</span>
              <span>•</span>
              <span>{new Date(album.release_date).getFullYear()}</span>
              <span>•</span>
              <span>{album.total_tracks} songs,</span>
              <span className="text-muted-foreground">
                {formatDuration(album.duration_ms)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
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

        {/* Track list */}
        <div className="bg-card rounded-lg">
          <TrackList tracks={tracks} showAlbum={false} />
        </div>

        {/* Album info */}
        <div className="bg-card rounded-lg p-6">
          <p className="text-muted-foreground text-sm mb-2">
            {new Date(album.release_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p className="text-white">
            © 2022 Harry Styles Limited, under exclusive licence to Columbia Records, 
            a Division of Sony Music Entertainment
          </p>
        </div>
      </div>
    </div>
  );
};
