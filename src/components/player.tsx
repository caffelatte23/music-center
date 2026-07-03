import { Toggle } from '@base-ui/react/toggle';

import { useAudioPlayer } from '@/state/audio-player';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

import {
  IconPause,
  IconPlay,
  IconRepeat,
  IconShuffle,
  IconSkipBack,
  IconSkipForward,
  IconVolume,
} from './icons';

export const Player = () => {
  const { toggle, isPlaying } = useAudioPlayer();
  return (
    <Flex
      className={css({
        h: 16,
        bg: 'sidebar',
        borderBottom: 'default',
      })}
    >
      <Flex align={'center'} gap={6} px={4}>
        <Toggle
          aria-label='shuffle'
          render={(props) => (
            <button
              type='button'
              {...props}
              className={css({
                cursor: 'pointer',
                color: { _pressed: 'accent', base: 'text-subtle' },
              })}
            >
              <IconShuffle />
            </button>
          )}
        />
        <button type='button'>
          <IconSkipBack />
        </button>

        <Toggle
          className={css({
            bg: 'accent',
            rounded: 'full',
            w: 7,
            h: 7,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            transition: 'tansform 0.1s',
            cursor: 'pointer',
            _hover: {
              transform: 'scale(1.1)',
            },
          })}
          pressed={isPlaying}
          onPressedChange={toggle}
          render={(props, state) => (
            <>
              {state.pressed ? (
                <button type='button' {...props}>
                  <IconPause size={12} />
                </button>
              ) : (
                <button type='button' {...props}>
                  <IconPlay size={12} />
                </button>
              )}
            </>
          )}
        />

        <button type='button'>
          <IconSkipForward />
        </button>

        <Toggle
          aria-label='repeat'
          render={(props) => (
            <button
              type='button'
              {...props}
              className={css({
                cursor: 'pointer',
                color: { _pressed: 'accent', base: 'text-subtle' },
              })}
            >
              <IconRepeat />
            </button>
          )}
        />
      </Flex>
      <Flex
        align={'center'}
        justify={'center'}
        flex={1}
        my={3}
        borderLeft='default'
        px={4}
        gap={6}
      >
        <div
          className={css({
            aspectRatio: '1/1',
            bg: 'album.navy',
            display: 'grid',
            placeItems: 'center',
            w: 12,
            h: 12,
          })}
        >
          <span
            className={css({
              fontWeight: 'bold',
              color: 'white/35',
              fontSize: 'xl',
            })}
          >
            N
          </span>
        </div>
        <div>
          <p className={css({ fontSize: 'xs' })}>Cascade</p>
          <p className={css({ textStyle: 'xxs.subtle' })}>Neon Germetry</p>
          <p className={css({ textStyle: 'xxs.subtle' })}>Ultrawave</p>
        </div>
        <span className={css({ textStyle: 'xxs.subtle' })}>1:23</span>
        <input
          type='range'
          min={0}
          max={100}
          className={css({ w: '300px' })}
          value={50}
        />
        <span className={css({ textStyle: 'xxs.subtle' })}>4:23</span>
        <audio id='player' />
      </Flex>
      <Flex align={'center'} px={4} my={3} gap={4} borderLeft='default'>
        <IconVolume />
        <input type='range' min={0} max={100} value={50} className={css({})} />
      </Flex>
    </Flex>
  );
};
