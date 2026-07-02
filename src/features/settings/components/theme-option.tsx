import { IconCheck } from '@/components/icons';
import { styled } from '@/styled-system/jsx';
import { visuallyHidden } from '@/styled-system/patterns';

type ThemeOptionProps = {
  label: string;
  value: string;
  variant: 'light' | 'dark';
  selected: boolean;
  onSelect: () => void;
};

export const ThemeOption = ({
  label,
  value,
  variant,
  selected,
  onSelect,
}: ThemeOptionProps) => {
  return (
    <ThemeOptionRoot data-selected={selected || undefined}>
      <input
        type='radio'
        name='theme'
        value={value}
        checked={selected}
        onChange={onSelect}
        className={visuallyHidden()}
      />
      <PreviewArea data-variant={variant}>
        <PreviewThumb />
        <PreviewContent>
          <PreviewLine w={'full'} />
          <PreviewLine w={'70%'} />
          <PreviewDash />
        </PreviewContent>
      </PreviewArea>
      <LabelBar data-selected={selected || undefined}>
        <styled.span fontSize={'sm'}>{label}</styled.span>
        {selected && (
          <CheckBadge>
            <IconCheck size={12} color='white' strokeWidth={3} />
          </CheckBadge>
        )}
      </LabelBar>
    </ThemeOptionRoot>
  );
};

const ThemeOptionRoot = styled('label', {
  base: {
    display: 'flex',
    flexDir: 'column',
    w: '48',
    rounded: 'md',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid token(colors.border)',
    _selected: {
      borderColor: 'accent',
      boxShadow: '0 0 0 1px token(colors.accent)',
    },
  },
});

// Preview swatches must always show the light/dark scheme they represent,
// regardless of the app's actual active theme. Scoping the color tokens'
// CSS variables to the data-variant attribute lets descendants keep using
// plain semantic tokens (bg / border / surface) while pinning their value.
const PreviewArea = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 2,
    p: 2,
    bg: 'surface',
    '&[data-variant=light]': {
      '--colors-surface': '#FFFFFF',
      '--colors-bg': '#F0F0F0',
      '--colors-border': '#E5E5E5',
    },
    '&[data-variant=dark]': {
      '--colors-surface': '#1A1A1A',
      '--colors-bg': '#111111',
      '--colors-border': '#3A3A3A',
    },
  },
});

const PreviewThumb = styled('div', {
  base: {
    w: '10',
    rounded: 'sm',
    bg: 'bg',
  },
});

const PreviewContent = styled('div', {
  base: {
    flex: 1,
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'space-between',
    py: 1,
  },
});

const PreviewLine = styled('div', {
  base: {
    h: '1.5',
    rounded: 'full',
    bg: 'border',
    '& + &': {
      mt: 1,
    },
  },
});

const PreviewDash = styled('div', {
  base: {
    w: '4',
    h: '1',
    rounded: 'full',
    bg: 'accent',
  },
});

const LabelBar = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 3,
    py: 2,
    bg: 'surface',
    borderTop: '1px solid token(colors.border)',
    _selected: {
      bg: 'accent-dim',
    },
  },
});

const CheckBadge = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    w: '4',
    h: '4',
    rounded: 'full',
    bg: 'accent',
  },
});
