import { styled } from '@/styled-system/jsx';

export const Label = styled('span', {
  base: {
    opacity: 0,
    whiteSpace: 'nowrap',
    transition: 'opacity 0.05s ease',
    _groupExpanded: {
      opacity: 1,
      transition: 'opacity 0.15s ease 0.15s',
    },
  },
});
