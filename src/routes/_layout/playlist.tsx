import { createFileRoute } from '@tanstack/react-router';

import { PlaylistPage } from '@/features/playlist/components/page';

export const Route = createFileRoute('/_layout/playlist')({
  component: () => <PlaylistPage />,
});
