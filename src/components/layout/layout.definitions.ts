import { Route } from "@next/constants/routes";

const navRoutes = [
  {
    path: Route.HOME.toString(),
    name: "HOME",
  },
  {
    path: Route.EXPERIENCE.toString(),
    name: "EXPERIENCE",
  },
  {
    path: Route.ACHIEVEMENTS.toString(),
    name: "ACHIEVEMENTS",
  },
  {
    path: Route.ABOUT.toString(),
    name: "ABOUT",
  },
  {
    path: Route.BLOGS.toString(),
    name: "BLOGS",
  },
  {
    path: Route.CONTACTS.toString(),
    name: "CONTACTS",
  },
];

const routeHome = [Route.HOME.toString()];

export { navRoutes, routeHome };
