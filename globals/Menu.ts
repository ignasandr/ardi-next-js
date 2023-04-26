import { GlobalConfig } from "payload/types";

const Menu: GlobalConfig = {
  slug: "menu",
  label: { en: "Menu", lt: "Meniu" },
  access: {
    read: (): boolean => true, // Everyone can read Menu
  },
  fields: [
    {
      name: "menuItems",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "menuItem",
          type: "text",
        },
      ],
    },
  ],
};

export default Menu;
