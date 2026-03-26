import type { NavItem } from "@/types/navigation";
export const useNavigation = () => {
  const navItems: NavItem[] = [
    { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
    {
      to: "/menu",
      label: "Меню",
      name: "streamline-freehand:book-read-list",
      exact: true,
    },
    {
      to: "/about",
      label: "О нас",
      name: "streamline-freehand:information-desk",
      exact: true,
    },
    {
      to: "/contact",
      label: "Контакт",
      name: "streamline-freehand:mail-send-email",
      exact: true,
    },
  ];

  return { navItems };
};
