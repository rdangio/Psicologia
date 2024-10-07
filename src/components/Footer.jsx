// Utilizado a biblioteca para fazer o efeito de onda no footer: https://www.shapedivider.app/

import { FooterData } from "./FooterData";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer className="relative text-white -z-10">
      <div className="absolute top-0 left-0 w-full overflow-hidden ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-white"
          ></path>
        </svg>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-20 text-[18px] ">
          <div className="flex flex-col">
            <h2 className="text-2xl text-pink-500 uppercase mb-4">Footer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              perspiciatis a magni maxime, possimus reprehenderit tempore nam
              voluptates asperiores quia soluta, sapiente nesciunt atque.
              Corrupti.
            </p>
          </div>

          {FooterData.map((section, index) => (
            <div className="flex flex-col" key={index}>
              <ul>
                <li className={section.cName}>{section.title}</li>
                {section.items.map((item, idx) => (
                  <li key={idx} className="my-4 list-none">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Ícones das redes sociais */}
              {section.socialLinks && (
                <div className="flex space-x-4">
                  {section.socialLinks.map((link, idx) => (
                    <a key={idx} href={link.href} className={link.cName}>
                      <link.icon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h6 className="text-center font-bold">&copy; {Year} RD Dev&Design</h6>
      </div>
    </footer>
  );
};

export default Footer;
