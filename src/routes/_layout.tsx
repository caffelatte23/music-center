import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Sidebar } from '@/components/sidebar';
import { css } from '@/styled-system/css';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className={css({ display: 'flex', h: 'full' })}>
      <Sidebar />
      <Outlet />
    </main>
  );
}
