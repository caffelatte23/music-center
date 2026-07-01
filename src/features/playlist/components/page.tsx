import { IconListView } from '@/components/icons';
import { AlbumPage } from '@/features/album/components/page';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

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
                <IconListView />
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
                <IconListView />
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
                <IconListView />
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
                <IconListView />
              </i>
              <Flex flexDir={'column'} justify={'center'} gap={0.5}>
                <p className={css({ fontWeight: 'medium' })}>Morning Commute</p>
                <p className={css({ color: 'text-subtle', fontSize: 'xs' })}>
                  23曲・1:32
                </p>
              </Flex>
            </li>
          </ul>
        </div>
      </div>
      <AlbumPage />
    </div>
  );
};
