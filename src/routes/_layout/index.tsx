import { createFileRoute } from '@tanstack/react-router';

import { LibraryPage } from '@/features/library/components/page';

export const Route = createFileRoute('/_layout/')({
  component: () => <LibraryPage />,
});
