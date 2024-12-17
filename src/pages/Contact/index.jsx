import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import Form from "../../components/Form";
import Map from "../../components/Map";

//Importação dos icones
import FacebookIcon from "../../components/Icons/FacebookIcon";
import InstagramIcon from "../../components/Icons/InstagramIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import LinkedInIcon from "../../components/Icons/LinkedInIcon";

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

        <div className="grid w-full grid-cols-4 border-2 md:gap-7 md:p-2 lg:m-4">
          <div className="flex items-center border-2">
            <div className="flex items-center justify-center border-r-2 border-c-turquoise-5">
              <EmailIcon className="h-6 w-6 md:h-4 md:w-6" />
            </div>
            <div className="ml-1">Claudia@email.com</div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center border-r-2 border-c-turquoise-5">
              <FacebookIcon className="h-6 w-6 md:h-4 md:w-6" />
            </div>
            <div className="ml-1">@claudia.dangio</div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center border-r-2 border-c-turquoise-5">
              <InstagramIcon className="h-6 w-6 md:h-4 md:w-6" />
            </div>
            <div className="ml-1">@claudia_dangio</div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center border-r-2 border-c-turquoise-5">
              <LinkedInIcon className="h-6 w-6 md:h-4 md:w-6" />
            </div>
            <div className="ml-1 whitespace-nowrap">Claudia Dangió</div>
          </div>
        </div>
      </section>
    </CentralizedContainer>
  );
};

export default Contact;
