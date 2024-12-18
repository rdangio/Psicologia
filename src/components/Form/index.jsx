//Bilioteca utilizada para o envio de e-mail pelo do formulário: Emailjs (yarn add @emailjs/browser)

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
    <div className="flex w-full flex-col items-center border-c-turquoise-5 sm:p-4 md:py-2">
      <h2 className="mb-1 text-fs-h5 font-bold text-c-turquoise-5">
        Fale comigo
      </h2>

      <form onSubmit={sendEmail} className="flex w-full flex-col">
        <input
          className="mb-3.5 h-8 rounded border p-2 tracking-wider shadow-sm placeholder:text-fs-h6 hover:border-c-turquoise-4 focus:border-c-turquoise-6 focus:shadow focus:outline-none"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="mb-3.5 h-8 rounded border p-2 tracking-wider shadow-sm placeholder:text-fs-h6 hover:border-c-turquoise-4 focus:border-c-turquoise-6 focus:shadow focus:outline-none"
          type="text"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="mb-3.5 h-32 w-full resize-none rounded border p-2 tracking-wider placeholder:text-fs-h6 hover:border-c-turquoise-4 focus:border-c-turquoise-6 focus:shadow focus:outline-none"
          type="text"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div className="flex w-full justify-center">
          <DefaultButton type="submit" onClick={sendEmail} className="w-full">
            Enviar
          </DefaultButton>
        </div>
      </form>
    </div>
  );
}

export default Form;
