import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Form from "../../components/Form";
import EmailIcon from "../../components/Icons/Email";
import IconInfo from "../../components/Icons/IconInfo";
import PhoneIcon from "../../components/Icons/Phone";

const Contact = () => {
  return (
    <CentralizedContainer>
      <div className="mx-auto mb-32 xl:container">
        <div
          className="flex justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(252,70,107,1) 100%",
            height: "250px",
          }}
        >
          <h1 className="pt-12 text-5xl uppercase text-white sm:text-7xl">
            Contato
          </h1>
        </div>

        <div className="mx-auto px-4 sm:w-2/3 lg:w-1/2">
          <div className="-mt-24 rounded-lg bg-white px-4 py-10 shadow-lg md:px-6 md:py-12">
            <div className="mx-auto mb-12 grid grid-cols-2 gap-x-6">
              <IconInfo icon={<EmailIcon />} text="claudia@email.com.br" />
              <IconInfo icon={<PhoneIcon />} text="(14)9 9777-7777" />
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </CentralizedContainer>
  );
};

export default Contact;
