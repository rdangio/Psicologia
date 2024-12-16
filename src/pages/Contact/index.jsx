import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Form from "../../components/Form";
import Map from "../../components/Map";

//Importação dos icones
import InstagramIcon from "../../components/Icons/Instagram";
import FacebookIcon from "../../components/Icons/Facebook";
import LinkedInIcon from "../../components/Icons/Linkedin";
import LocationIcon from "../../components/Icons/Location";

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Contact = () => {
  return (
    <CentralizedContainer>
      <section className="m-auto mt-4 flex flex-col items-center">
        <h1 className="mb-2 text-2xl font-bold">Contato</h1>
        <p className="text-center text-sm leading-6">
          Tem alguma dúvida? Fale comigo pelos canais de comunicação e agende
          seu atendimento!
        </p>

        <div className="mt-10 flex w-full flex-col md:flex-row">
          <div className="w-full">
            <Form />
          </div>

          <div className="sm:p-4 md:w-full">
            <Map />
          </div>
        </div>

        <div className="mx-4 mb-4 grid w-full grid-cols-5 items-center gap-10 p-4">
          <div className="border-2 border-black">
            <FaBeer />
          </div>
          <div className="border-2 border-black">
            <FacebookIcon />
          </div>
          <div className="border-2 border-black">
            <InstagramIcon />
          </div>
          <div className="border-2 border-black">
            <LinkedInIcon />
          </div>
          <div className="border-2 border-black">
            <LocationIcon />
          </div>
        </div>
      </section>
    </CentralizedContainer>
  );
};

export default Contact;
