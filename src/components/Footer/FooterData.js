import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const defaultCname =
  "text-[22px] list-none font-semibold text-pink-500 py-2 uppercase";

const defaultSocialLinks = "text-gray-500 cursor-pointer hover:text-gray-700";

export const FooterData = [
  {
    title: "Cláudia Dangió",
    items: ["Psicóloga"],
    subItems: ["CRP 06/136891"],
    cName: "mt-2 text-sm text-gray-500",
  },
  {
    title: "Guidline & Ideas",
    items: ["Guidline & Ideas", "Tips & Tricks", "Photography"],
    cName: defaultCname,
  },
  {
    title: "Contato",
    items: ["E-mail: seu-email@email.com", "Telefone: +55 14 99999-8888"],
    cName: defaultCname,
    socialLinks: [
      {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/claudia-dangi%C3%B3-21100469/",
        cName: defaultSocialLinks,
      },
      {
        icon: FaInstagram,
        href: "https://www.instagram.com/claudia_dangio/",
        cName: defaultSocialLinks,
      },
      {
        icon: FaFacebook,
        href: "https://www.facebook.com/claudia.dangio",
        cName: defaultSocialLinks,
      },
    ],
  },
];
