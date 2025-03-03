import { pxToVw } from '@/styles/px-to-vw.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const tabList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: pxToVw(78),
  padding: pxToVw([15, 12]),
});

export const tabItem = styleVariants({
  default: {
    display: 'flex',
    flex: 1,
    gap: pxToVw(8),
    height: '100%',
    fontSize: pxToVw(12),
    fontWeight: 600,
    color: vars.colors.darkCharcoal,
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
  },
  active: {
    color: vars.colors.activeMint,
    fontWeight: 700,
  },
});

export const tabItemLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  color: 'inherit',
  fontWeight: 'inherit',
});
