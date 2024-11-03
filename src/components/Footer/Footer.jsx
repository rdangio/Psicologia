import Form from "../Form";
// import { FooterData } from "./FooterData";
import Logo from "../Logo/Logo";

import { FooterData } from "./FooterData";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  // Encontra o objeto com `socialLinks` dentro de `FooterData`
  const contactData = FooterData.find((data) => data.socialLinks);

  return (
    <footer className="flex flex-col items-center bg-c-turquoise-5">
      <div className="mt-2">
        <Logo />
      </div>

      {/* Redes Sociais */}
      <div className="flex space-x-4 mt-4">
        {contactData?.socialLinks?.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={link.cName}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon />
          </a>
        ))}
      </div>

      <Form />
      <div>
        <h6 className="text-center font-bold text-c-turquoise-1">
          &copy; {Year} RD Dev&Design
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
