import { createFileRoute } from '@tanstack/react-router';

import { AlbumPage } from '@/features/album/components/page';

export const Route = createFileRoute('/_layout/$albumId')({
  component: () => <AlbumPage />,
});
