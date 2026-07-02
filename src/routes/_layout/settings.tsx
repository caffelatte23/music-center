import { createFileRoute } from '@tanstack/react-router';

import { SettingsPage } from '@/features/settings/components/page';

export const Route = createFileRoute('/_layout/settings')({
  component: Component,
});

function Component() {
  return <SettingsPage />;
}
