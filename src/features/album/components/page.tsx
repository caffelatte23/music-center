import { Button, PlayButton } from '@/components/button';
import { IconEdit } from '@/components/icons';
import { Album } from '@/features/library/models/album';
import { css } from '@/styled-system/css';
import { Flex, styled } from '@/styled-system/jsx';

const mockAlbum: Album = {
  title: 'Neon Geometry',
  author: 'Ultrawave',
  releaseYear: 2024,
};

export const AlbumPage = () => {
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
            py: 8,
          })}
        >
          <Flex gap={6}>
            <div
              className={css({
                aspectRatio: '1/1',
                bg: 'album.navy',
                rounded: 'md',
                display: 'grid',
                placeItems: 'center',
                w: '165px',
              })}
            >
              <span
                className={css({
                  fontWeight: 'bold',
                  color: 'white/35',
                  fontSize: '4xl',
                })}
              >
                N
              </span>
            </div>
            <Flex flexDir={'column'} justify={'space-between'} gap={1}>
              <div>
                <h2 className={css({ fontSize: 'xs', color: 'text-subtle' })}>
                  アルバム
                </h2>
                <p
                  className={css({ fontSize: '2xl', fontWeight: 'extrabold' })}
                >
                  {mockAlbum.title}
                </p>
                <p className={css({ fontSize: 'sm', color: 'text-medium' })}>
                  {mockAlbum.author}
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

              <Flex gap={3}>
                <PlayButton />
                <Button
                  type='button'
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  })}
                >
                  <IconEdit />
                  情報を編集
                </Button>
              </Flex>
            </Flex>
          </Flex>
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
