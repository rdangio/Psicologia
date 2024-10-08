import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const FooterData = [
  {
    title: "Creativity",
    items: ["Website Guidline & Ideas", "Tips & Tricks", "Photography"],
    cName: "text-[22px] list-none font-semibold text-pink-500 py-2 uppercase",
  },
  {
    title: "Guidline & Ideas",
    items: ["Guidline & Ideas", "Tips & Tricks", "Photography"],
    cName: "text-[22px] list-none font-semibold text-pink-500 py-2 uppercase",
  },
  {
    title: "Contato",
    items: ["E-mail: seu-email@email.com", "Telefone: +55 14 99999-8888"],
    cName: "text-[22px] list-none font-semibold text-pink-500 py-2 uppercase",
    socialLinks: [
      {
        icon: FaGithub,
        href: "https://www.github.com",
        cName:
          "text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ",
      },
      {
        icon: FaLinkedin,
        href: "https://www.linkedin.com",
        cName:
          "text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ",
      },
      {
        icon: FaInstagram,
        href: "https://www.instagram.com",
        cName:
          "text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ",
      },
      {
        icon: FaFacebook,
        href: "https://www.facebook.com",
        cName:
          "text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ",
      },
    ],
  },
];
