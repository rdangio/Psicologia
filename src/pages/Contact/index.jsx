import Cards from "../../components/Cards";
import { FaClock, FaPhone, FaInfoCircle } from "react-icons/fa";
import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form";
import Map from "../../components/Map";

const Contact = () => {
  // Funções para os botões dos cards
  const handleWhatsappClick = () => {
    window.open(
      `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`,
      "_blank",
    );
  };

  const handleInfoClick = () => {
    window.alert("Mais informações em breve!");
  };

  return (
    <>
      <CentralizedContainer className="border-red border">
        <section className="m-auto mt-4 flex flex-col items-center">
          <h1 className="mb-2 text-fs-h1 font-bold">Contato</h1>
          <p className="text-center text-sm leading-6">
            Tem alguma dúvida? Fale comigo pelos canais de comunicação e agende
            seu atendimento!
          </p>

          <div className="mt-8 flex w-full flex-col md:flex-row">
            <div className="w-full">
              <Form />
            </div>

            {/* Traço vertical que separa o formulário do mapa */}
            <div className="rounded-full bg-c-turquoise-5 shadow-md md:mt-4 md:h-72 md:w-[2px]"></div>

            <div className="sm:p-4 md:w-full">
              <Map />
            </div>
          </div>
        </section>
        <div className="my-10">
          <div className="flex flex-col sm:grid md:grid-cols-3">
            <div className="flex flex-wrap justify-center gap-4">
              <Cards
                imageSrc="/Images/horario.jpg"
                imageAlt="Imagem de um relógio"
                icon={FaClock}
                title="Horários de Atendimento"
                description="Segunda à sexta-feira: 9h às 18h"
                buttonText="Agendar Horário"
                onButtonClick={handleWhatsappClick}
              />
              <Cards
                imageSrc="/Images/telefone.jpg"
                imageAlt="Imagem de um telefone"
                icon={FaPhone}
                title="Fale Conosco"
                description="Entre em contato para tirar suas dúvidas"
                showButton={false}
              />
              <Cards
                imageSrc="/Images/info.jpg"
                imageAlt="Imagem de informações"
                icon={FaInfoCircle}
                title="Sobre Nós"
                description="Conheça mais sobre nossos serviços"
                buttonText="Saiba Mais"
                onButtonClick={handleInfoClick}
              />
            </div>
          </div>
        </div>
      </CentralizedContainer>
      <Footer />
    </>
  );
};

export default Contact;
