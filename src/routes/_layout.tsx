import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Player } from '@/components/player';
import { Sidebar } from '@/components/sidebar';
import { css } from '@/styled-system/css';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main
      className={css({
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateRows: 'auto 1fr',
        h: 'full',
      })}
    >
      <Player />
      <div className={css({ display: 'flex', minH: 0 })}>
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
