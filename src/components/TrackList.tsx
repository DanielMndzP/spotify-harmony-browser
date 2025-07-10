
import React from 'react';
import { Play, Pause, Heart, MoreHorizontal, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration_ms: number;
  preview_url?: string;
}

interface TrackListProps {
  tracks: Track[];
  showAlbum?: boolean;
}

export const TrackList: React.FC<TrackListProps> = ({ tracks, showAlbum = true }) => {
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="space-y-1">
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-muted-foreground text-sm border-b border-spotify-gray">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-5">TITLE</div>
        {showAlbum && <div className="col-span-3">ALBUM</div>}
        <div className={showAlbum ? "col-span-2" : "col-span-5"}>DATE ADDED</div>
        <div className="col-span-1 text-center">
          <Clock className="w-4 h-4 mx-auto" />
        </div>
      </div>
      
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className="grid grid-cols-12 gap-4 px-4 py-2 track-hover group"
        >
          <div className="col-span-1 text-center text-muted-foreground group-hover:text-white">
            <span className="group-hover:hidden">{index + 1}</span>
            <Play className="w-4 h-4 hidden group-hover:block mx-auto" />
          </div>
          
          <div className="col-span-5 flex items-center gap-3">
            <div>
              <p className="text-white font-medium truncate">{track.name}</p>
              <p className="text-muted-foreground text-sm truncate">{track.artist}</p>
            </div>
          </div>
          
          {showAlbum && (
            <div className="col-span-3 text-muted-foreground text-sm truncate flex items-center">
              {track.album}
            </div>
          )}
          
          <div className={`${showAlbum ? "col-span-2" : "col-span-5"} text-muted-foreground text-sm flex items-center`}>
            7 days ago
          </div>
          
          <div className="col-span-1 flex items-center justify-center gap-2">
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
              <Heart className="w-4 h-4" />
            </Button>
            <span className="text-muted-foreground text-sm">
              {formatDuration(track.duration_ms)}
            </span>
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
