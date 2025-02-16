const navItems = [
  {
    id: 1,
    name: "Beranda",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Layanan",
    href: "/service",
    subNavItems: [
      { id: 1, name: "Sukuk", href: "/sukuk" },
      { id: 2, name: "Saham", href: "/stock" },
      { id: 3, name: "Pasar Sekunder", href: "/market" },
    ],
  },
  {
    id: 3,
    name: "Tentang Kami",
    href: "",
    subNavItems: [
      { id: 1, name: "Visi dan Misi Perusahaan", href: "/visi-misi" },
      { id: 2, name: "Nilai Nilai Perusahaan", href: "/nilai" },
      { id: 3, name: "Tim Invsma", href: "/about" },
    ],
  },
  {
    id: 4,
    name: "Informasi",
    href: "/information",
    subNavItems: [
      { id: 1, name: "Penerbit", href: "/publisher" },
      { id: 2, name: "Pemodal", href: "/financier" },
      { id: 3, name: "Kontak Kami", href: "/contact" },
    ],
  },
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-instagram", link: "" },
];
