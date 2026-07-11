export interface NavigationLink {
  label: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Announcements",
    href: "/announcements",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];