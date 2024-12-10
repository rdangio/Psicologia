import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";

const Contact = () => {
  return (
    <CentralizedContainer>
      <div className="mx-auto mb-32 xl:container">
        <div
          className="flex justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(252,70,107,1) 100%",
          }}
        >
          <h1 className="pt-12 text-5xl uppercase text-white sm:text-7xl">
            Contato
          </h1>
        </div>
        <div className="mx-auto px-4 sm:w-2/3 lg:w-1/2">
          <div className="-mt24 rounded-lg bg-white px-4 py-10 shadow-lg md:px-6 md:py-12">
            FORM
          </div>
        </div>
      </div>
    </CentralizedContainer>
  );
};

export default Contact;
