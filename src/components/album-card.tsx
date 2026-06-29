import { Album } from '@/features/library/models/album';
import { css } from '@/styled-system/css';

export const AlbumCard = ({ value }: { value: Album }) => {
  return (
    <article
      className={css({
        transition: 'opacity 0.12s',
        cursor: 'pointer',
        opacity: { base: 1, _hover: 0.8 },
      })}
    >
      <div
        className={css({
          aspectRatio: '1/1',
          bg: 'album.navy',
          rounded: 'md',
          display: 'grid',
          placeItems: 'center',
        })}
      >
        <span
          className={css({
            fontWeight: 'bold',
            color: 'white/35',
            fontSize: '4xl',
          })}
        >
          {value.title.charAt(0)}
        </span>
      </div>
      <footer className={css({ mt: '2' })}>
        <h3 className={css({ fontWeight: 'medium' })}>{value.title}</h3>
        <p
          className={css({
            fontSize: 'xs',
            color: 'text-subtle',
            fontWeight: 'medium',
          })}
        >
          {value.author}
        </p>
        <p
          className={css({
            fontSize: 'xs',
            color: 'text-subtle',
            fontWeight: 'medium',
          })}
        >
          {value.releaseYear}
        </p>
      </footer>
    </article>
  );
};
