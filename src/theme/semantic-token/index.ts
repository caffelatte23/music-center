import { defineSemanticTokens } from '@pandacss/dev';

import { borders } from './borders';
import { colors } from './colors';

export const semanticTokens = defineSemanticTokens({
  colors,
  borders,
});
