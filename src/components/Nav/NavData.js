const responsiveCName =
  "text-c-turquoise-1 text-fs-nav my-2 p-1 border-b border-t border-slate-800 hover:bg-c-turquoise-4 hover:rounded cursor-pointer";

const defaultCName =
  "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-c-turquoise-4 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center cursor-pointer text-fs-nav";

export const NavData = [
  {
    title: "Home",
    to: "Home",
    url: "/",
    cName: defaultCName,
    cResponsive: responsiveCName,
  },
  {
    title: "Sobre",
    to: "About",
    url: "#",
    cName: defaultCName,
    cResponsive: responsiveCName,
  },
  {
    title: "Serviços",
    to: "Services",
    url: "#",
    cName: defaultCName,
    cResponsive: responsiveCName,
  },
  {
    title: "Projetos",
    to: "Project",
    url: "#",
    cName: defaultCName,
    cResponsive: responsiveCName,
  },
  {
    title: "Contato",
    to: "Contact",
    url: "#",
    cName: defaultCName,
    cResponsive: responsiveCName,
  },
];
