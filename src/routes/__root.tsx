import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Outlet />
      </ThemeProvider>
    </React.Fragment>
  );
}
