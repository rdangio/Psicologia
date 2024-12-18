import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Footer from "../../components/Footer/Footer";
// import Form from "../../components/Form";
import Form2 from "../../components/Form/index2";
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
              <Form2 />
            </div>

            {/* Traço vertical que separa o formulário do mapa */}
            <div className="mt-4 h-72 w-[2px] rounded-full bg-c-turquoise-5 shadow-md"></div>

            <div className="sm:p-4 md:w-full">
              <Map />
            </div>
          </div>
        </section>
        <div className="h-40">
          <div className="grid grid-cols-3 border-2">
            <div>grid1</div>
            <div>grid2</div>
            <div>grid3</div>
          </div>
        </div>
      </CentralizedContainer>
      <Footer />
    </>
  );
};

export default Contact;
