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
        "LC0umWmEt9nBlaNjV",
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
        },
      );
  }

  return (
    <div className="mx-auto flex flex-col mt-10 mb-10 w-[80%] justify-center items-center">
      <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-c-turquoise-1">
        Contato
      </h2>

      <form
        onSubmit={sendEmail}
        className="flex w-full max-w-lg flex-col sm:w-full"
      >
        <input
          className="p2 mb-3.5 h-8 rounded border-none p-0 pl-2"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="p2 mb-3.5 h-8 rounded border-none p-0 pl-2"
          type="text"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="p2 mb-3.5 h-20 resize-none rounded border-none p-1 pl-2"
          type="text"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </form>

      <div className="flex w-full justify-center">
        <DefaultButton type="submit" onClick={sendEmail}>
          Enviar
        </DefaultButton>
      </div>
    </div>
  );
}

export default Form;
