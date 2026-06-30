import { createFileRoute } from '@tanstack/react-router';

import { AlbumPage } from '@/features/album/components/page';

export const Route = createFileRoute('/_album/$albumId')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AlbumPage />;
}
