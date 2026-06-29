import { Sidebar } from '@/components/sidebar';
import { LibraryPage } from '@/features/library/components/page';
import { css } from '@/styled-system/css';

const App = () => {
  return (
    <main className={css({ display: 'flex', h: 'full' })}>
      <Sidebar />
      <LibraryPage />
    </main>
  );
};

export default App;
