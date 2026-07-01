import { useTheme } from 'next-themes';
import { HTMLProps } from 'react';

import { IconMoon, IconSun } from '@/components/icons';
import { Label } from '@/components/label';

export type ColorMode = 'light' | 'dark';

export const ColorModeSwitcher = (props: HTMLProps<HTMLButtonElement>) => {
  const theme = useTheme();

  const toggleTheme = () => {
    theme.setTheme(() => (theme.theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button {...props} type='button' onClick={toggleTheme}>
      {theme.theme === 'dark' ? (
        <>
          <IconSun />
          <Label>ライトモード</Label>
        </>
      ) : (
        <>
          <IconMoon />
          <Label>ダークモード</Label>
        </>
      )}
    </button>
  );
};
