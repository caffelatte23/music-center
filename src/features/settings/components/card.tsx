import { styled } from '@/styled-system/jsx';

const CardRoot = styled('div', {
  base: {
    rounded: 'md',
    w: 'full',
    bg: 'surface',
  },
});

const CardHeader = styled('div', {
  base: {
    borderBottom: 'default',
    px: 5,
    py: 3,
    color: 'text-subtle',
    fontSize: 'xs',
    fontWeight: 'medium',
  },
});

const CardBody = styled('div', {
  base: {
    px: 5,
    py: 4,
  },
});

export const Card = {
  Root: CardRoot,
  Body: CardBody,
  Header: CardHeader,
};
