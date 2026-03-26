import type { MenuItem } from "@types/index";

export const useNavigation = () => {
  const mainNav = [
    { to: "/", label: "Домой", name: "streamline-freehand:home", exact: true },
    {
      to: "/menu",
      label: "Меню",
      name: "streamline-freehand:mobile-shopping-shop-basket",
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
      label: "Контакты",
      name: "streamline-freehand:collaboration-team-chat",
      exact: true,
    },
  ];

  return { mainNav };
};
