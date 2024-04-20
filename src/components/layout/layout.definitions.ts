import { Routes } from '@next/constants/routes';
export type NavRoutesType = { id: number; path: string; name: string };

const navRoutes: NavRoutesType[] = [
  {
    id: 1,
    path: Routes.HOME.toString(),
    name: 'HOME',
  },
  {
    id: 2,
    path: Routes.EXPERIENCE.toString(),
    name: 'EXPERIENCE',
  },
  // {
  //   path: Route.ACHIEVEMENTS.toString(),
  //   name: "ACHIEVEMENTS",
  // },
  {
    id: 3,
    path: Routes.ABOUT.toString(),
    name: 'ABOUT',
  },
  {
    id: 4,
    path: Routes.BLOGS.toString(),
    name: 'BLOGS',
  },
  {
    id: 5,
    path: Routes.CONTACTS.toString(),
    name: 'CONTACTS',
  },
];

const routeHome = [Routes.HOME.toString()];

export { navRoutes, routeHome };
