import { css } from "@/styled-system/css";

export const AlbumCard = () => {
  return (
    <article>
      <div
        className={css({
          boxSize: "160px",
          bg: "album.navy",
          rounded: "md",
        })}
      ></div>
      <div className={css({ fontWeight: "medium" })}>Neon Geometry</div>
      <div className={css({ fontSize: "xs", color: "text-subtle", fontWeight: "medium" })}>
        Ultrawave
      </div>
      <div className={css({ fontSize: "xs", color: "text-subtle", fontWeight: "medium" })}>
        2024
      </div>
    </article>
  );
};
