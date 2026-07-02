import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { visuallyHidden } from '@/styled-system/patterns';

import {
  IconPlay,
  IconRepeat,
  IconShuffle,
  IconSkipBack,
  IconSkipForward,
  IconVolume,
} from './icons';

export const Player = () => {
  return (
    <Flex
      className={css({
        h: '64px',
        bg: 'sidebar',
        borderBottom: 'default',
      })}
    >
      <Flex w={'300px'} gap={3} align={'center'}>
        <div
          className={css({
            aspectRatio: '1/1',
            bg: 'album.navy',
            display: 'grid',
            placeItems: 'center',
            w: '64px',
            h: '64px',
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
          <p className={css({ fontSize: 'xxs', color: 'text-subtle' })}>
            Neon Germetry
          </p>
          <p className={css({ fontSize: 'xxs', color: 'text-subtle' })}>
            Ultrawave
          </p>
        </div>
      </Flex>
      <Flex
        align={'center'}
        flex={1}
        my={3}
        borderLeft='default'
        px={4}
        gap={6}
      >
        <label>
          <input type='checkbox' name='shuffle' className={visuallyHidden()} />
          <IconShuffle
            className={css({
              color: { _checked: 'accent', base: 'text-subtle' },
            })}
          />
        </label>

        <IconSkipBack />
        <div
          className={css({
            bg: 'accent',
            rounded: 'full',
            w: 7,
            h: 7,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            transition: 'tansform 0.1s',
            _hover: {
              transform: 'scale(1.1)',
            },
          })}
        >
          <IconPlay size={12} />
        </div>

        <IconSkipForward />
        <label>
          <input type='checkbox' name='shuffle' className={visuallyHidden()} />
          <IconRepeat
            className={css({
              color: { _checked: 'accent', base: 'text-subtle' },
            })}
          />
        </label>

        <input
          type='range'
          min={0}
          max={100}
          className={css({ flex: 1 })}
          value={50}
        />
        <span className={css({ fontSize: 'xxs', color: 'text-subtle' })}>
          4:23
        </span>
      </Flex>
      <Flex align={'center'} px={4} my={3} gap={4} borderLeft='default'>
        <IconVolume />
        <input type='range' min={0} max={100} value={50} className={css({})} />
      </Flex>
    </Flex>
  );
};
