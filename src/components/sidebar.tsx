import {
  IconAppLogo,
  IconChevronLeft,
  IconGrid,
  IconMoon,
  IconNowPlaying,
  IconPlaylist,
  IconSettings,
} from "@/components/icons";
import { css } from "@/styled-system/css";
import { Divider, styled } from "@/styled-system/jsx";

export const Sidebar = () => {
  return (
    <aside
      className={css({
        w: "240px",
        borderRight: "1px solid token(colors.border)",
        display: "flex",
        flexDir: "column",
        bg: "sidebar",
      })}
    >
      <h1
        className={css({
          py: 4,
          px: 6,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "2",
        })}
      >
        <div
          className={css({
            w: 6,
            h: 6,
            display: "grid",
            placeItems: "center",
            bg: "accent",
            borderRadius: "md",
          })}
        >
          <IconAppLogo size={12} />
        </div>
        Music Center
      </h1>
      <Divider color={"border"} />
      <nav className={css({ height: "full", p: 2 })}>
        <ul>
          <ListItem data-current>
            <IconGrid />
            ライブラリ
          </ListItem>
          <ListItem>
            <IconNowPlaying />
            再生中
          </ListItem>
          <ListItem>
            <IconPlaylist />
            プレイリスト
          </ListItem>
        </ul>
      </nav>
      <Divider color={"border"} />
      <div className={css({ p: 2 })}>
        <ul>
          <ListItem>
            <IconSettings />
            設定
          </ListItem>
          <ListItem>
            <IconMoon />
            ダークモード
          </ListItem>
          <ListItem>
            <IconChevronLeft />
            折りたたむ
          </ListItem>
        </ul>
      </div>
    </aside>
  );
};

const ListItem = styled("li", {
  base: {
    px: 4,
    py: 2,
    cursor: "pointer",
    rounded: "md",
    display: "flex",
    gap: "2",
    alignItems: "center",
    color: "text-medium",
    _current: {
      bg: "accent/10",
      color: "accent",
      fontWeight: "medium",
    },
  },
});
