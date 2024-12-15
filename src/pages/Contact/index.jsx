import Map from "../../components/Map";
import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <CentralizedContainer>
      <section className="m-auto mt-8 flex w-4/5 max-w-lg flex-col items-center">
        <h4 className="mb-1 text-lg font-bold capitalize">Contate-me</h4>

        <h1 className="mb-2 text-2xl font-bold">Entre em Contato</h1>
        <p className="mb-4 text-center text-sm leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          assumenda.
        </p>

        <div>
          <Form />
        </div>

        <div>
          <Map />
        </div>
      </section>
    </CentralizedContainer>
  );
};

export default Contact;
