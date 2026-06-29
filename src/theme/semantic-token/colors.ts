import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: { value: { base: '#F0F0F0', _dark: '#2A2A2A' } },
  surface: { value: { base: '#FFFFFF', _dark: '#363636' } },
  sidebar: { value: { base: '#F8F8F8', _dark: '#303030' } },
  border: { value: { base: '#E5E5E5', _dark: '#444444' } },
  hover: { value: { base: '#EBEBEB', _dark: '#3E3E3E' } },
  active: { value: { base: '#EBF3FF', _dark: '#1A2843' } },
  'input-bg': { value: { base: '#F5F5F5', _dark: '#3A3A3A' } },
  'input-border': { value: { base: '#E0E0E0', _dark: '#4E4E4E' } },
  accent: { value: { base: '#0055CC', _dark: '#4D8EFF' } },
  'accent-hover': { value: '#0047AA' },
  'accent-dim': { value: { base: '#EBF3FF', _dark: '#0D1830' } },
  'text-primary': { value: { base: '#111111', _dark: '#F5F5F5' } },
  'text-medium': { value: { base: '#444444', _dark: '#D8D8D8' } },
  'text-subtle': { value: { base: '#888888', _dark: '#A0A0A0' } },
  'overlay-modal': { value: 'rgba(0,0,0,0.45)' },
});
