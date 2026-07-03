import { convertFileSrc } from '@tauri-apps/api/core';
import { audioDir, join } from '@tauri-apps/api/path';
import {
  createContext,
  ReactNode,
  RefObject,
  use,
  useRef,
  useState,
} from 'react';

type AudioPlayerState = {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  playerRef: RefObject<HTMLAudioElement | null>;
};

const initialState: Partial<AudioPlayerState> = {
  isPlaying: false,
  setIsPlaying: () => {},
};

const audioPlayerContext = createContext<AudioPlayerState>(
  initialState as AudioPlayerState,
);

const getSampleAudioSrc = async () => {
  const dir = await audioDir();
  const samplePath = await join(dir, 'sample.mp3');
  return convertFileSrc(samplePath);
};

export const useAudioPlayer = () => {
  const { isPlaying, setIsPlaying, playerRef } = use(audioPlayerContext);

  const getPlayer = (): HTMLAudioElement | null => {
    if (playerRef.current) return playerRef.current;

    const player = document.getElementById('player');
    if (!(player instanceof HTMLAudioElement)) return null;

    playerRef.current = player;
    return player;
  };

  const play = async () => {
    const playerRef = getPlayer();
    if (!playerRef) return;

    playerRef.src = await getSampleAudioSrc();
    playerRef.play();
    setIsPlaying(true);
  };

  const pause = () => {
    const playerRef = getPlayer();
    if (!playerRef) return;

    playerRef.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) return pause();
    return play();
  };

  return {
    isPlaying,
    play,
    pause,
    toggle,
  };
};

export const AudioPlayerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLAudioElement>(null);
  return (
    <audioPlayerContext.Provider value={{ isPlaying, setIsPlaying, playerRef }}>
      {children}
    </audioPlayerContext.Provider>
  );
};
