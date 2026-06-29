import { createFileRoute } from '@tanstack/react-router';

import { Sidebar } from '@/components/sidebar';
import { LibraryPage } from '@/features/library/components/page';
import { css } from '@/styled-system/css';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <main className={css({ display: 'flex', h: 'full' })}>
      <Sidebar />
      <LibraryPage />
    </main>
  );
}
