import { Outlet, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import { AudioPlayerContextProvider } from '@/state/audio-player';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <AudioPlayerContextProvider>
          <Outlet />
        </AudioPlayerContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
