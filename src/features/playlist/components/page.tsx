import { IconPlaylist, IconPlus } from '@/components/icons';
import { IconPause } from '@/components/icons';
import { Album } from '@/features/library/models/album';
import { css } from '@/styled-system/css';
import { Flex, styled } from '@/styled-system/jsx';

const mockAlbum: Album = {
  title: 'Neon Geometry',
  author: 'Ultrawave',
  releaseYear: 2024,
};

const PlaylistDetail = () => {
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
          borderBottom: '1px solid token(colors.border)',
          px: 8,
          bg: 'surface',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 8,
          })}
        >
          <Flex gap={6}>
            <div
              className={css({
                color: 'white',
                p: 4,
                w: 24,
                h: 24,
                display: 'grid',
                placeItems: 'center',
                rounded: 'md',
                bg: 'album.navy',
              })}
            >
              <IconPlaylist size={32} />
            </div>

            <div>
              <h2 className={css({ fontSize: 'xs', color: 'text-subtle' })}>
                プレイリスト
              </h2>
              <p className={css({ fontSize: '2xl', fontWeight: 'extrabold' })}>
                {mockAlbum.title}
              </p>
              <p
                className={css({
                  fontSize: 'xs',
                  color: 'text-subtle',
                  mt: 2,
                })}
              >
                {mockAlbum.releaseYear}&nbsp;・&nbsp;11曲
              </p>
            </div>
          </Flex>
          <button
            type='button'
            className={css({
              px: 4,
              py: 2,
              border: '1px solid',
              borderColor: 'border',
              rounded: 'md',
              bgColor: 'accent',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            })}
          >
            <IconPause />
            一時停止
          </button>
        </div>
      </header>
      <main
        className={css({
          p: 8,
          bg: 'bg',
          overflowY: 'auto',
        })}
      >
        <table className={css({ w: 'full' })}>
          <thead>
            <tr
              className={css({
                borderBottom: '1px solid',
                borderColor: 'border',
                color: 'text-subtle',
                textAlign: 'left',
              })}
            >
              <Th>#</Th>
              <Th>タイトル</Th>
              <Th>アーティスト</Th>
              <Th>アルバム</Th>
              <Th>時間</Th>
            </tr>
          </thead>
          <tbody>
            {Array(12)
              .fill(0)
              .map((_, idx) => (
                <tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td weight='bold'>Cascade</Td>
                  <Td>Neon Geometry</Td>
                  <Td>Neon Geometry</Td>
                  <Td>4:23</Td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

const Th = styled('th', {
  base: {
    pb: 2,
    fontWeight: 'medium',
    fontSize: 'xs',
  },
});

const Td = styled('td', {
  base: {
    py: 2,
    color: 'text-subtle',
  },
  variants: {
    weight: {
      bold: {
        fontWeight: 'bold',
        color: 'text-primary',
      },
    },
  },
  defaultVariants: undefined,
});

export const PlaylistPage = () => {
  return (
    <div
      className={css({
        w: 'full',
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gridTemplateRows: '1fr',
      })}
    >
      <div
        className={css({
          borderRight: '1px solid',
          borderRightColor: 'border',
          bg: 'surface',
        })}
      >
        <div>
          <div
            className={css({
              p: 5,
              borderBottom: '1px solid',
              borderBottomColor: 'border',
            })}
          >
            <h2
              className={css({
                fontSize: 'md',
                fontWeight: 'medium',
              })}
            >
              プレイリスト
            </h2>
          </div>
          <ul
            className={css({
              p: 4,
              display: 'flex',
              flexDir: 'column',
              gap: 2,
            })}
          >
            <li className={css({ display: 'flex', py: 2, gap: 3 })}>
              <i
                className={css({
                  flexShrink: 0,
                  color: 'white',
                  p: 4,
                  rounded: 'md',
                  bg: 'album.navy',
                })}
              >
                <IconPlaylist />
              </i>
              <Flex flexDir={'column'} justify={'center'} gap={0.5}>
                <p className={css({ fontWeight: 'medium' })}>Morning Commute</p>
                <p className={css({ color: 'text-subtle', fontSize: 'xs' })}>
                  23曲・1:32
                </p>
              </Flex>
            </li>
            <li className={css({ display: 'flex', py: 2, gap: 3 })}>
              <i
                className={css({
                  flexShrink: 0,
                  color: 'white',
                  p: 4,
                  rounded: 'md',
                  bg: 'album.forest',
                })}
              >
                <IconPlaylist />
              </i>
              <Flex flexDir={'column'} justify={'center'} gap={0.5}>
                <p className={css({ fontWeight: 'medium' })}>Morning Commute</p>
                <p className={css({ color: 'text-subtle', fontSize: 'xs' })}>
                  23曲・1:32
                </p>
              </Flex>
            </li>
            <li className={css({ display: 'flex', py: 2, gap: 3 })}>
              <i
                className={css({
                  flexShrink: 0,
                  color: 'white',
                  p: 4,
                  rounded: 'md',
                  bg: 'album.berry',
                })}
              >
                <IconPlaylist />
              </i>
              <Flex flexDir={'column'} justify={'center'} gap={0.5}>
                <p className={css({ fontWeight: 'medium' })}>Morning Commute</p>
                <p className={css({ color: 'text-subtle', fontSize: 'xs' })}>
                  23曲・1:32
                </p>
              </Flex>
            </li>
            <li className={css({ display: 'flex', py: 2, gap: 3 })}>
              <i
                className={css({
                  flexShrink: 0,
                  color: 'white',
                  p: 4,
                  rounded: 'md',
                  bg: 'album.plum',
                })}
              >
                <IconPlaylist />
              </i>
              <Flex flexDir={'column'} justify={'center'} gap={0.5}>
                <p className={css({ fontWeight: 'medium' })}>Morning Commute</p>
                <p className={css({ color: 'text-subtle', fontSize: 'xs' })}>
                  23曲・1:32
                </p>
              </Flex>
            </li>
            <li>
              <button
                type='button'
                className={css({
                  display: 'flex',
                  w: 'full',
                  alignItems: 'center',
                  gap: 2,
                  border: '1px dashed token(colors.border)',
                  px: 4,
                  py: 3,
                  rounded: 'md',
                  fontSize: 'xs',
                  color: 'text-subtle',
                })}
              >
                <IconPlus />
                新しいプレイリスト
              </button>
            </li>
          </ul>
        </div>
      </div>
      <PlaylistDetail />
    </div>
  );
};
