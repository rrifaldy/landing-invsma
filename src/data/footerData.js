import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/footer-logo.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Halpes",
  copyrightYear: new Date().getFullYear(),
  about:
    "Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod tempor incididunt ut labore.",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "#",
      icon: "fa-twitter",
    },
    {
      id: 2,
      href: "#",
      icon: "fa-facebook-square",
    },
    {
      id: 3,
      href: "#",
      icon: "fa-dribbble",
    },
    {
      id: 4,
      href: "#",
      icon: "fa-instagram",
    },
  ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Penerbit",
    },
    {
      id: 2,
      href: "#",
      title: "Pemodal",
    },
  ],
  inside: [
    {
      id: 1,
      href: "#",
      title: "Tentang Kami",
    },
    {
      id: 2,
      href: "#",
      title: "Visi Misi",
    },
  ],
  Thingking: [
    {
      id: 1,
      href: "#",
      title: "Saham",
    },
    {
      id: 2,
      href: "#",
      title: "Sukuk",
    },
    {
      id: 2,
      href: "#",
      title: "Pasar Sekunder",
    },
  ],
  copyright: [
    {
      id: 1,
      href: "#",
      title: "Privacy",
    },
    {
      id: 1,
      href: "#",
      title: "Term of use",
    },
    {
      id: 1,
      href: "#",
      title: "© 2024 INVSMA.CO.ID",
    },
  ],
};

export default footerData;
