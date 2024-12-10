// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const defaultCname =
  "text-[22px] list-none font-semibold text-c-turquoise-1 py-2 uppercase";

const defaultSocialLinks =
  "text-c-turquoise-1 cursor-pointer  hover:text-c-turquoise-2 w-6";

const LinkedInIcon = () => (
  <svg
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="0"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path
      stroke="none"
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    ></path>
    <circle cx="4" cy="4" r="2" stroke="none"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  </svg>
);

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
        icon: InstagramIcon,
        href: "https://www.instagram.com/claudia_dangio/",
        cName: defaultSocialLinks,
      },
      {
        icon: FacebookIcon,
        href: "https://www.facebook.com/claudia.dangio",
        cName: defaultSocialLinks,
      },
      {
        icon: LinkedInIcon,
        href: "https://www.linkedin.com/in/claudia-dangi%C3%B3-21100469/",
        cName: defaultSocialLinks,
      },
    ],
  },
];
