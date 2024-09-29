const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Services",
    href: "",
    subNavItems: [
      { id: 1, name: "Sukuk", href: "/sukuk" },
      { id: 2, name: "Sharia Stock", href: "/stock" },
      { id: 3, name: "Secondary Market", href: "/market" },
    ],
  },
  {
    id: 3,
    name: "About",
    href: "/about",
    subNavItems: [
      
    ],
  },
  {
    id: 4,
    name: "Information",
    href: "",
    subNavItems: [
      { id: 1, name: "Publisher's Guide", href: "/publisher" },
      { id: 2, name: "Financire's Guide", href: "/financier" },
      { id: 3, name: "Contacts", href: "/contact" },
    ],
  },
  {
    id: 5,
    name: "0812-8619-7142",
    href: "#",
    subNavItems: [
      
    ],
  },
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-instagram", link: "" },
];
