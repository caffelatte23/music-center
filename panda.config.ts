import { defineConfig } from '@pandacss/dev';

import { semanticTokens } from '@/theme/semantic-token';
import { textStyles } from '@/theme/text-style';
import { tokens } from '@/theme/token';

export default defineConfig({
  preflight: true,

  globalCss: {
    html: {
      height: '100vh',
    },
    body: {
      height: '100%',
    },
    '#root': {
      height: '100%',
      fontFamily: 'Noto Sans JP',
      fontSize: '13px',
      isolation: 'isolate',
    },
  },

  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },

  jsxFramework: 'react',
  outdir: 'styled-system',
});
