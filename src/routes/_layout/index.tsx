import { createFileRoute } from '@tanstack/react-router';

import { fetchAlbums } from '@/features/library/actions/album';
import { LibraryPage } from '@/features/library/components/page';

export const Route = createFileRoute('/_layout/')({
  component: () => <LibraryPage />,
  loader: fetchAlbums,
});
