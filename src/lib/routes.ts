import { locations } from '../data/locations';
import { services } from '../data/services';
import { fixedRoutes } from '../data/site';

export type PublicRoute = {
  href: string;
  label: string;
  description: string;
  group: 'Main' | 'Services' | 'Locations';
  image?: string;
};

export const publicRoutes: PublicRoute[] = [
  ...fixedRoutes.map((route) => ({ ...route, group: 'Main' as const })),
  ...services.map((service) => ({
    href: `/services/${service.slug}/`,
    label: service.title,
    description: service.seoDescription,
    group: 'Services' as const,
    image: service.image,
  })),
  ...locations.map((location) => ({
    href: `/locations/${location.slug}/`,
    label: `Valet parking in ${location.name}`,
    description: location.seoDescription,
    group: 'Locations' as const,
    image: location.image,
  })),
];

export const routesByGroup = publicRoutes.reduce<Record<PublicRoute['group'], PublicRoute[]>>(
  (groups, route) => {
    groups[route.group].push(route);
    return groups;
  },
  { Main: [], Services: [], Locations: [] },
);
