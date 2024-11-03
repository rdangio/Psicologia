//Bilioteca utilizada para o envio de e-mail através do formulário: Emailjs (yarn add @emailjs/browser)

import { useState } from "react";
import DefaultButton from "../Button/index";
import emailJs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const tamplateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailJs
      .send(
        "service_3jpp0hj",
        "template_hcdprma",
        tamplateParams,
        "LC0umWmEt9nBlaNjV"
      )
      .then(
        (response) => {
          console.log("E-mail enviado!", response.status, response.text);

          // Limpando os inputs após enviar o e-mail
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }

  return (
    <div className="flex flex-col w-full sm:w-full sm:mt-0 md:items-center xs:w-60 xs:mt-10">
      <h2 className="mb-3 text-sm font-medium tracking-widest text-c-turquoise-1 uppercase title-font">
        Contato
      </h2>

      <form
        onSubmit={sendEmail}
        className="flex flex-col max-w-lg w-full sm:w-full"
      >
        <input
          className="mb-3.5 h-8 rounded border-none p-0 p2 pl-2"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="mb-3.5 h-8 rounded border-none p-0 p2 pl-2"
          type="text"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="mb-3.5 h-20 rounded border-none p-1 p2 resize-none pl-2"
          type="text"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </form>

      <div className="w-full flex justify-center">
        <DefaultButton type="submit" onClick={sendEmail}>
          Enviar
        </DefaultButton>
      </div>
    </div>
  );
}

export default Form;
