/**
 * Music Center Design System - Icon Components
 *
 * Usage:
 *   import { IconPlay, IconShuffle } from './components/icons.tsx'
 *   <IconPlay size={16} color="currentColor" />
 *
 * All icons are 24x24 viewBox, outline style (stroke-width 2, stroke-linecap round)
 * unless noted as "filled".
 */

import type { CSSProperties, SVGProps } from 'react';

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
  className?: string;
}

const defaultProps = (props: IconProps): SVGProps<SVGSVGElement> => ({
  width: props.size ?? 16,
  height: props.size ?? 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: props.color ?? 'currentColor',
  strokeWidth: props.strokeWidth ?? 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  style: props.style,
  className: props.className,
  'aria-hidden': true,
});

// -- Navigation --------------------------------------------------------------

/** 2x2 grid - Library screen */
export const IconGrid = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <rect x='3' y='3' width='7' height='7' rx='1' />
    <rect x='14' y='3' width='7' height='7' rx='1' />
    <rect x='14' y='14' width='7' height='7' rx='1' />
    <rect x='3' y='14' width='7' height='7' rx='1' />
  </svg>
);

/** Circled play - Now Playing screen */
export const IconNowPlaying = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <circle cx='12' cy='12' r='10' />
    <polygon
      points='10 8 16 12 10 16 10 8'
      fill={props.color ?? 'currentColor'}
      stroke='none'
    />
  </svg>
);

/** Bulleted list - Playlists screen */
export const IconPlaylist = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <line x1='8' y1='6' x2='21' y2='6' />
    <line x1='8' y1='12' x2='21' y2='12' />
    <line x1='8' y1='18' x2='21' y2='18' />
    <circle
      cx='3'
      cy='6'
      r='1.5'
      fill={props.color ?? 'currentColor'}
      stroke='none'
    />
    <circle
      cx='3'
      cy='12'
      r='1.5'
      fill={props.color ?? 'currentColor'}
      stroke='none'
    />
    <circle
      cx='3'
      cy='18'
      r='1.5'
      fill={props.color ?? 'currentColor'}
      stroke='none'
    />
  </svg>
);

/** Gear - Settings screen */
export const IconSettings = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <circle cx='12' cy='12' r='3' />
    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' />
  </svg>
);

// -- Playback controls -------------------------------------------------------

/** Filled play triangle */
export const IconPlay = (props: IconProps) => (
  <svg
    {...defaultProps(props)}
    fill={props.color ?? 'currentColor'}
    stroke='none'
  >
    <polygon points='5 3 19 12 5 21 5 3' />
  </svg>
);

/** Filled pause - two bars */
export const IconPause = (props: IconProps) => (
  <svg
    {...defaultProps(props)}
    fill={props.color ?? 'currentColor'}
    stroke='none'
  >
    <rect x='6' y='4' width='4' height='16' />
    <rect x='14' y='4' width='4' height='16' />
  </svg>
);

/** Skip back - filled */
export const IconSkipBack = (props: IconProps) => (
  <svg
    {...defaultProps(props)}
    fill={props.color ?? 'currentColor'}
    stroke='none'
  >
    <path d='M19 20L9 12l10-8v16z' />
    <rect x='5' y='4' width='2' height='16' />
  </svg>
);

/** Skip forward - filled */
export const IconSkipForward = (props: IconProps) => (
  <svg
    {...defaultProps(props)}
    fill={props.color ?? 'currentColor'}
    stroke='none'
  >
    <path d='M5 4l10 8-10 8V4z' />
    <rect x='17' y='4' width='2' height='16' />
  </svg>
);

/** Shuffle arrows */
export const IconShuffle = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <polyline points='16 3 21 3 21 8' />
    <line x1='4' y1='20' x2='21' y2='3' />
    <polyline points='21 16 21 21 16 21' />
    <line x1='15' y1='15' x2='21' y2='21' />
    <line x1='4' y1='4' x2='9' y2='9' />
  </svg>
);

/** Repeat arrows */
export const IconRepeat = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <polyline points='17 1 21 5 17 9' />
    <path d='M3 11V9a4 4 0 0 1 4-4h14' />
    <polyline points='7 23 3 19 7 15' />
    <path d='M21 13v2a4 4 0 0 1-4 4H3' />
  </svg>
);

// -- UI controls -------------------------------------------------------------

/** Magnifying glass - search */
export const IconSearch = (props: IconProps) => (
  <svg {...defaultProps(props)} strokeWidth={props.strokeWidth ?? 2.5}>
    <circle cx='11' cy='11' r='8' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' />
  </svg>
);

/** 4-cell view grid */
export const IconGridView = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <rect x='3' y='3' width='7' height='7' rx='0.5' />
    <rect x='14' y='3' width='7' height='7' rx='0.5' />
    <rect x='14' y='14' width='7' height='7' rx='0.5' />
    <rect x='3' y='14' width='7' height='7' rx='0.5' />
  </svg>
);

/** Single-column list view */
export const IconListView = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <line x1='8' y1='6' x2='21' y2='6' />
    <line x1='8' y1='12' x2='21' y2='12' />
    <line x1='8' y1='18' x2='21' y2='18' />
    <line x1='3' y1='6' x2='3.01' y2='6' />
    <line x1='3' y1='12' x2='3.01' y2='12' />
    <line x1='3' y1='18' x2='3.01' y2='18' />
  </svg>
);

/** Heart - like / favorite */
export const IconHeart = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

/** Pencil - edit */
export const IconEdit = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
    <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
  </svg>
);

/** Plus - add new */
export const IconPlus = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <line x1='12' y1='5' x2='12' y2='19' />
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
);

/** X - close / dismiss */
export const IconClose = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

/** Checkmark */
export const IconCheck = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

/** Chevron right */
export const IconChevronRight = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <polyline points='9 18 15 12 9 6' />
  </svg>
);

/** Chevron left - back navigation */
export const IconChevronLeft = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <polyline points='15 18 9 12 15 6' />
  </svg>
);

// -- Theme -------------------------------------------------------------------

/** Sun - light mode */
export const IconSun = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <circle cx='12' cy='12' r='5' />
    <line x1='12' y1='1' x2='12' y2='3' />
    <line x1='12' y1='21' x2='12' y2='23' />
    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
    <line x1='1' y1='12' x2='3' y2='12' />
    <line x1='21' y1='12' x2='23' y2='12' />
    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
  </svg>
);

/** Moon - dark mode */
export const IconMoon = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
  </svg>
);

// -- Audio -------------------------------------------------------------------

/** Speaker with waves - volume */
export const IconVolume = (props: IconProps) => (
  <svg {...defaultProps(props)}>
    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
    <path d='M19.07 4.93a10 10 0 0 1 0 14.14' />
    <path d='M15.54 8.46a5 5 0 0 1 0 7.07' />
  </svg>
);

// -- App logo ----------------------------------------------------------------

/** Music Center app logo (filled play) */
export const IconAppLogo = ({
  size = 16,
  color = 'white',
  style,
  className,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill={color}
    style={style}
    className={className}
    aria-hidden
  >
    <polygon points='5 3 19 12 5 21 5 3' />
  </svg>
);

// -- Default export: all icons as a map --------------------------------------

const Icons = {
  Grid: IconGrid,
  NowPlaying: IconNowPlaying,
  Playlist: IconPlaylist,
  Settings: IconSettings,
  Play: IconPlay,
  Pause: IconPause,
  SkipBack: IconSkipBack,
  SkipForward: IconSkipForward,
  Shuffle: IconShuffle,
  Repeat: IconRepeat,
  Search: IconSearch,
  GridView: IconGridView,
  ListView: IconListView,
  Heart: IconHeart,
  Edit: IconEdit,
  Plus: IconPlus,
  Close: IconClose,
  Check: IconCheck,
  ChevronRight: IconChevronRight,
  ChevronLeft: IconChevronLeft,
  Sun: IconSun,
  Moon: IconMoon,
  Volume: IconVolume,
  AppLogo: IconAppLogo,
};

export default Icons;
