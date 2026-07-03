import { Tabs } from '@base-ui/react/tabs';
import { Link } from '@tanstack/react-router';

import { AlbumCard } from '@/components/album-card';
import { IconGridView, IconListView, IconSearch } from '@/components/icons';
import { Album } from '@/features/library/models/album';
import { css } from '@/styled-system/css';
import { Flex, Grid, styled } from '@/styled-system/jsx';

const mockAlbum: Album = {
  title: 'Neon Geometry',
  author: 'Ultrawave',
  releaseYear: 2024,
};

export const LibraryPage = () => {
  return (
    <section
      className={css({
        flex: 1,
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
      })}
    >
      <header
        className={css({
          display: 'flex',
          flexDir: 'column',
          borderBottom: 'default',
          px: 8,
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 4,
          })}
        >
          <div>
            <h2 className={css({ fontSize: 'lg', fontWeight: 'medium' })}>
              ライブラリ
            </h2>
            <p className={css({ fontSize: 'xs', color: 'text-subtle' })}>
              12アルバム・20曲
            </p>
          </div>
          <Flex gap={4}>
            <ButtonGroup>
              <ButtonGroupItem type='button' data-current>
                <IconGridView />
              </ButtonGroupItem>
              <ButtonGroupItem type='button'>
                <IconListView />
              </ButtonGroupItem>
            </ButtonGroup>
            <Flex
              align={'center'}
              gap={2}
              color={'text-subtle'}
              className={css({
                outline: '1px solid token(colors.input-border)',
                bg: 'input-bg',
                px: 2,
                py: 1,
                rounded: 'md',
              })}
            >
              <IconSearch />
              <input
                type='text'
                className={css({ _focus: { outline: 'none' } })}
                placeholder='検索...'
              />
            </Flex>
          </Flex>
        </div>
        <nav>
          <Tabs.Root defaultValue={'album'}>
            <Tabs.List className={css({ pos: 'relative' })}>
              <TabItem value={'album'}>アルバム</TabItem>
              <TabItem value={'track'}>曲</TabItem>
              <Indicator />
            </Tabs.List>
          </Tabs.Root>
          <ul className={css({ display: 'flex' })}></ul>
        </nav>
      </header>
      <main
        className={css({
          p: 8,
          bg: 'bg',
          overflowY: 'auto',
        })}
      >
        <Grid
          gridTemplateColumns='repeat(auto-fill, minmax(160px, 1fr))'
          gap='5'
        >
          {Array(20)
            .fill(0)
            .map((_, idx) => (
              <Link
                key={idx}
                to='/$albumId'
                params={{ albumId: idx.toFixed() }}
              >
                <AlbumCard value={mockAlbum} />
              </Link>
            ))}
        </Grid>
      </main>
    </section>
  );
};

const TabItem = styled(Tabs.Tab, {
  base: {
    color: 'text-medium',
    px: 4,
    py: 2,
    cursor: 'pointer',
    _active: {
      color: 'accent',
      fontWeight: 'medium',
    },
  },
});

const Indicator = styled(Tabs.Indicator, {
  base: {
    borderBottom: '2px solid',
    borderColor: 'accent',
    boxSizing: 'border-box',
    position: 'absolute',
    zIndex: '-1',
    left: '0',
    bottom: '0',
    translate: 'var(--active-tab-left)',
    width: ' var(--active-tab-width)',
    transitionProperty: 'translate, width',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-in-out',
  },
});

const ButtonGroup = styled('div', {
  base: {
    borderColor: 'border',
    border: '1px solid',
    borderRadius: 'md',
    '&> button + button': {
      borderLeft: '1px solid',
      borderColor: 'border',
    },
  },
});

const ButtonGroupItem = styled('button', {
  base: {
    color: 'text-subtle',
    p: 2,
    _current: {
      color: 'white',
      bg: 'accent',
    },
    _first: {
      borderTopLeftRadius: 'md',
      borderBottomLeftRadius: 'md',
    },
    _last: {
      borderTopRightRadius: 'md',
      borderBottomRightRadius: 'md',
    },
  },
});
