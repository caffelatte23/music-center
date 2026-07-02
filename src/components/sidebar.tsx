import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import { ColorModeSwitcher } from '@/components/color-mode';
import {
  IconAppLogo,
  IconChevronLeft,
  IconGrid,
  IconNowPlaying,
  IconPlaylist,
  IconSettings,
} from '@/components/icons';
import { Label } from '@/components/label';
import { css, cx } from '@/styled-system/css';
import { Divider, styled } from '@/styled-system/jsx';

export const Sidebar = () => {
  const [isExpand, setIsExpand] = useState<boolean>(true);

  return (
    <aside
      className={cx(
        css({
          borderRight: 'default',
          display: 'flex',
          flexDir: 'column',
          bg: 'sidebar',
          transition: 'width 0.2s ease',
          overflow: 'hidden',
          flexShrink: 0,
        }),
        'group',
      )}
      style={{ width: isExpand ? '240px' : '64px' }}
      aria-expanded={isExpand}
    >
      <h1
        className={css({
          py: 4,
          px: 4,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '2',
        })}
      >
        <div
          className={css({
            flexShrink: 0,
            w: 6,
            h: 6,
            display: 'grid',
            placeItems: 'center',
            bg: 'accent',
            borderRadius: 'md',
          })}
        >
          <IconAppLogo size={12} />
        </div>
        <Label>Music Center</Label>
      </h1>
      <Divider color={'border'} />
      <nav className={css({ height: 'full', p: 2 })}>
        <ul>
          <ListItem>
            <Link to='/' className={inlineListStyle}>
              <IconGrid />
              <Label>ライブラリ</Label>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to='/$albumId'
              params={{ albumId: '1' }}
              className={inlineListStyle}
            >
              <IconNowPlaying />
              <Label>再生中</Label>
            </Link>
          </ListItem>
          <ListItem>
            <Link to='/playlist' className={inlineListStyle}>
              <IconPlaylist />
              <Label>プレイリスト</Label>
            </Link>
          </ListItem>
        </ul>
      </nav>
      <Divider color={'border'} />
      <div className={css({ p: 2 })}>
        <ul>
          <ListItem>
            <Link to='/settings' className={inlineListStyle}>
              <IconSettings />
              <Label>設定</Label>
            </Link>
          </ListItem>
          <ListItem>
            <ColorModeSwitcher className={inlineListStyle} />
          </ListItem>
          <ListItem>
            <button
              type='button'
              className={inlineListStyle}
              onClick={() => setIsExpand((prev) => !prev)}
            >
              <div
                className={css({
                  flexShrink: 0,
                  transition: 'transform 0.2s ease',
                  transform: isExpand ? 'rotate(0deg)' : 'rotate(180deg)',
                })}
              >
                <IconChevronLeft />
              </div>
              <Label>折りたたむ</Label>
            </button>
          </ListItem>
        </ul>
      </div>
    </aside>
  );
};

const ListItem = styled('li', {
  base: {
    px: 4,
    py: 2,
    cursor: 'pointer',
    rounded: 'md',
    display: 'flex',
    gap: '2',
    alignItems: 'center',
    color: 'text-medium',
    '& svg': { flexShrink: 0 },
    '&:has(a[aria-current=page])': {
      bgColor: 'accent/10',
      color: 'accent',
      fontWeight: 'medium',
    },
  },
});

const inlineListStyle = css({
  display: 'flex',
  gap: '2',
  alignItems: 'center',
  cursor: 'pointer',
});
