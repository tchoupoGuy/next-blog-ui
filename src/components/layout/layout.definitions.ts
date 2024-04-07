import { Route } from '@next/constants/routes';
export type NavRoutesType = { id: number; path: string; name: string };

const navRoutes: NavRoutesType[] = [
  {
    id: 1,
    path: Route.HOME.toString(),
    name: 'HOME',
  },
  {
    id: 2,
    path: Route.EXPERIENCE.toString(),
    name: 'EXPERIENCE',
  },
  // {
  //   path: Route.ACHIEVEMENTS.toString(),
  //   name: "ACHIEVEMENTS",
  // },
  {
    id: 3,
    path: Route.ABOUT.toString(),
    name: 'ABOUT',
  },
  {
    id: 4,
    path: Route.BLOGS.toString(),
    name: 'BLOGS',
  },
  {
    id: 5,
    path: Route.CONTACTS.toString(),
    name: 'CONTACTS',
  },
];

const routeHome = [Route.HOME.toString()];

export { navRoutes, routeHome };
