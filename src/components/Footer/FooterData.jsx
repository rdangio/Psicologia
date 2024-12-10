import LinkedInIcon from "../Icons/LinkedInIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const defaultCname = "mb-3 text-gray-400";

const defaultSocialLinks = "text-c-turquoise-1 cursor-pointer w-6";

export const FooterData = [
  {
    title: "E-mail: Claudia@email.com",
    cName: defaultCname,
  },

  {
    title: "Telefone: (14) 99999-8888",
    cName: defaultCname,
  },

  {
    title: "Me siga nas redes sociais!",
    cName: defaultCname,
  },

  {
    socialLinks: [
      {
        icon: <InstagramIcon />,
        href: "https://www.instagram.com/claudia_dangio/",
        cName: defaultSocialLinks,
      },
      {
        icon: <FacebookIcon />,
        href: "https://www.facebook.com/claudia.dangio",
        cName: defaultSocialLinks,
      },
      {
        icon: <LinkedInIcon />,
        href: "https://www.linkedin.com/in/claudia-dangi%C3%B3-21100469/",
        cName: defaultSocialLinks,
      },
    ],
  },
];
