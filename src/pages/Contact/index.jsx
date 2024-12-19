import Cards from "../../components/Cards";
import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form";
import Map from "../../components/Map";

const Contact = () => {
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
            <div>
              <Cards />
            </div>
            <div>{/* grid2 */}</div>
            <div>{/* grid3 */}</div>
          </div>
        </div>
      </CentralizedContainer>
      <Footer />
    </>
  );
};

export default Contact;
