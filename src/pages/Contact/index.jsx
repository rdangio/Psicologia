import CentralizedContainer from "../../components/CentralizedContainer/CentralizedContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <CentralizedContainer>
      <section>
        <div className="content">
          <h2>Contato</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic
            quasi qui doloribus perspiciatis eum repudiandae voluptatibus vero
            nostrum modi, cupiditate accusamus dolor voluptate, impedit sequi
            assumenda corrupti at placeat!
          </p>
        </div>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text">
                <h3>Endereço </h3>
                <p>
                  Rua: Dos Bobos, 0 <br /> Jaú/SP
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h3>Telefone </h3>
                <p>
                  (14) 99777-7777 <br /> Jaú/SP
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h3>E-mail: </h3>
                <p>claudia@email.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CentralizedContainer>
  );
};

export default Contact;
