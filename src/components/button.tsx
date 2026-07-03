import { useAudioPlayer } from '@/state/audio-player';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

import { IconPause, IconPlay } from './icons';

export const Button = styled('button', {
  base: {
    cursor: 'pointer',
    rounded: 'md',
    px: 4,
    py: 2,
  },
  variants: {
    variant: {
      plain: {
        border: '1px solid',
        borderColor: 'border',
      },
      primary: {
        border: '1px solid',
        borderColor: 'border',
        bgColor: 'accent',
        color: 'white',
      },
      icon: {
        p: 0,
        rounded: 'full',
      },
    },
  },
  defaultVariants: {
    variant: 'plain',
  },
});

export const PlayButton = () => {
  const { isPlaying, play, pause } = useAudioPlayer();

  if (isPlaying) {
    return (
      <Button
        type='button'
        variant='primary'
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        })}
        onClick={pause}
      >
        <IconPause />
        一時停止
      </Button>
    );
  }

  return (
    <Button
      type='button'
      variant='primary'
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      })}
      onClick={play}
    >
      <IconPlay />
      再生
    </Button>
  );
};
