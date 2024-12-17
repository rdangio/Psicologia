import LinkedInIcon from "../../components/Icons/LinkedInIcon";
import FacebookIcon from "../../components/Icons/FacebookIcon";
import InstagramIcon from "../../components/Icons/InstagramIcon";
import LocationIcon from "../../components/Icons/LocationIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import PhoneIcon from "../../components/Icons/PhoneIcon";
import WhatsappIcon from "../../components/Icons/WhatsAppIcon";

const defaultCname =
  "mb-3 text-c-turquoise-1 text-center flex flex-col items-center font-roboto text-fs-h7 sm:text-fs-h6 md:text-fs-h6 lg:text-fs-h6 xl:text-fs-h4";

const defaultSocialLinks = "text-c-turquoise-1 cursor-pointer w-6";

export const FooterData = [
  {
    title: "R. Conde do Pinhal, 196 - Centro, Jaú - SP, 17201-040",
    cName: defaultCname,
    icon: <LocationIcon />,
  },

  {
    title: "E-mail: claudia.iroma@hotmail.com",
    cName: defaultCname,
    icon: <EmailIcon />,
  },

  {
    title: "Telefone: (14) 99703-0269",
    cName: defaultCname,
    icon: <PhoneIcon />,
    icon2: <WhatsappIcon />,
  },

  // {
  //   title: "Me siga nas redes sociais!",
  //   cName: defaultCname,
  // },

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
