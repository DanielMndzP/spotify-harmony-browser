
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

export const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [progress, setProgress] = useState([30]);

  const currentTrack = {
    name: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=64&h=64&fit=crop"
  };

  return (
    <div className="h-24 bg-spotify-dark-gray border-t border-spotify-gray px-4 flex items-center justify-between">
      {/* Current Track Info */}
      <div className="flex items-center gap-4 min-w-0 w-80">
        <img
          src={currentTrack.image}
          alt={currentTrack.album}
          className="w-14 h-14 rounded"
        />
        <div className="min-w-0 flex-1">
          <p className="text-white text-sm font-medium truncate">
            {currentTrack.name}
          </p>
          <p className="text-muted-foreground text-xs truncate">
            {currentTrack.artist}
          </p>
        </div>
        <Button variant="ghost" size="sm">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 bg-white text-black hover:bg-gray-200 rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </Button>
          <Button variant="ghost" size="sm">
            <SkipForward className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-muted-foreground">1:23</span>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">3:21</span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2 w-80 justify-end">
        <Volume2 className="w-4 h-4" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="w-24"
        />
      </div>
    </div>
  );
};
