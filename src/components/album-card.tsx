import { css } from "@/styled-system/css";

export const AlbumCard = () => {
  return (
    <article>
      <div
        className={css({
          boxSize: "160px",
          bg: "album.navy",
          rounded: "md",
          display: "block",
        })}
      />
      <footer className={css({ mt: "2" })}>
        <h3 className={css({ fontWeight: "medium" })}>Neon Geometry</h3>
        <p className={css({ fontSize: "xs", color: "text-subtle", fontWeight: "medium" })}>
          Ultrawave
        </p>
        <p className={css({ fontSize: "xs", color: "text-subtle", fontWeight: "medium" })}>
          <time dateTime="2024">2024</time>
        </p>
      </footer>
    </article>
  );
};
