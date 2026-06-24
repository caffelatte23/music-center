import { css } from "@/styled-system/css";
import { Divider } from "@/styled-system/jsx";
import { AlbumCard } from "./components/album-card";

const App = () => {
  return (
    <main className={css({ display: "flex", h: "full" })}>
      <aside
        className={css({
          w: "300px",
          borderRight: "1px solid black",
          display: "flex",
          flexDir: "column",
        })}
      >
        <h1
          className={css({
            py: 4,
            px: 6,
          })}
        >
          Music Center
        </h1>
        <Divider />
        <nav className={css({ height: "full", p: 2 })}>
          <ul>
            <li
              className={css({
                px: 4,
                py: 2,
                rounded: "md",
                _hover: {
                  bg: "blue.300",
                },
              })}
            >
              ライブラリ
            </li>
            <li
              className={css({
                px: 4,
                py: 2,
                rounded: "md",
                _hover: {
                  bg: "blue.300",
                },
              })}
            >
              再生中
            </li>
            <li
              className={css({
                px: 4,
                py: 2,
                rounded: "md",
                _hover: {
                  bg: "blue.300",
                },
              })}
            >
              プレイリスト
            </li>
          </ul>
        </nav>
        <Divider />
        <div className={css({ p: 2 })}>
          <ul>
            <li
              className={css({
                px: 4,
                py: 2,
              })}
            >
              設定
            </li>
            <li
              className={css({
                px: 4,
                py: 2,
              })}
            >
              ダークモード
            </li>
            <li
              className={css({
                px: 4,
                py: 2,
              })}
            >
              折りたたむ
            </li>
          </ul>
        </div>
      </aside>
      <section
        className={css({
          flex: 1,
        })}
      >
        <header
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 4,
            borderBottom: "1px solid black",
          })}
        >
          <div>
            <h2>ライブラリ</h2>
            <p>12アルバム・20曲</p>
          </div>
          <div>
            <input type="text" className={css({ outline: "1px solid black" })} />
            <input type="text" className={css({ outline: "1px solid black" })} />
          </div>
        </header>
        <main
          className={css({
            p: 8,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 4,
          })}
        >
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </main>
      </section>
    </main>
  );
};

export default App;
