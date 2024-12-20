import Cards from "../../components/Cards";
// import { FaClock, FaPhone, FaInfoCircle } from "react-icons/fa";
import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form";
import Map from "../../components/Map";
import Navbar from "../../components/Nav/Nav";

const Contact = () => {
  // Funções para os botões dos cards
  const handleWhatsappClick = () => {
    window.open(
      `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`,
      "_blank",
    );
  };

  return (
    <>
      <Navbar />
      <CentralizedContainer className="">
        <section className="m-auto mt-4 flex flex-col items-center">
          <h1 className="mb-2 text-fs-h1 font-bold">Contato</h1>
          <p className="text-center text-sm leading-6">
            Tem alguma dúvida? Fale comigo pelos canais de comunicação e agende
            seu atendimento!
          </p>

          <div className="mt-8 flex w-full flex-col sm:flex-row md:flex-row">
            <div className="w-full sm:w-1/2">
              <Form />
            </div>

            {/* Traço vertical que separa o formulário do mapa */}
            <div className="rounded-full bg-gray-300 shadow-md sm:mt-4 sm:h-72 sm:w-[1px] md:mt-3 md:h-80 md:w-[1px]"></div>

            <div className="sm:p-4 md:w-1/2">
              <Map />
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-4">
            <Cards
              className="h-full min-h-[300px] flex-1 basis-1/3"
              imageSrc="/Images/horario.jpg"
              imageAlt="Imagem de um relógio"
              icon=""
              showIcon={false}
              title="Horários de Atendimento"
              description="Seg à Sex: 9h às 18h"
              buttonText="Agendar Horário"
              onButtonClick={handleWhatsappClick}
            />
            <Cards
              className="h-full min-h-[300px] w-full flex-1 basis-1/3"
              imageSrc="/Images/telefone.jpg"
              imageAlt="Imagem de um telefone"
              icon=""
              showIcon={false}
              title="Fale Comigo, como posso te ajudar?"
              description="(14) 99703-0269"
              showButton={false}
            />
            <Cards
              className="h-full min-h-[300px] flex-1 basis-1/3"
              imageSrc="/Images/atendimento-online.jpg"
              imageAlt="Imagem de Atendimento Online"
              imageClassName=""
              icon=""
              showIcon={false}
              title="Atendimento Clínico On-line e Presencial"
              description="Não importa como, irei te ajudar!"
              showButton={false}
            />
          </div>
        </section>
      </CentralizedContainer>
      <Footer />
    </>
  );
};

export default Contact;
