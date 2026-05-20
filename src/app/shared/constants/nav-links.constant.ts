import { NavLinks } from '../models/nav-links';

export const NAV_LINKS = [
  { label: 'NAV.HOME', path: `/` },
  { label: 'NAV.ABOUT', path: `/about` },
  { label: 'NAV.MENU', path: `/menu` },
  { label: 'NAV.BRANCHES', path: `/branches` },
] as const satisfies NavLinks[];
