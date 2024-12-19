//Bilioteca utilizada para o envio de e-mail pelo do formulário: Emailjs (yarn add @emailjs/browser)

import { useState } from "react";
import DefaultButton from "../Button/index";
import emailJs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função para transformar as palavras sempre com inicial maiúscula
  const capitalizeWords = (text) => {
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

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
    <div className="flex w-full flex-col items-center sm:p-4 md:py-2">
      <h2 className="mb-1 text-fs-h5 font-bold tracking-wider text-c-turquoise-5">
        Fale comigo
      </h2>

      <form onSubmit={sendEmail} className="flex w-full flex-col">
        {/* Nome */}
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            onChange={(e) => setName(capitalizeWords(e.target.value))}
            value={name}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-c-turquoise-6 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-c-turquoise-5"
            placeholder=" "
            required
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm tracking-wider text-gray-500 duration-300 placeholder:text-fs-h6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-c-turquoise-4 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-c-turquoise-3">
            Seu nome
          </label>
        </div>

        {/* E-mail */}
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-c-turquoise-6 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-c-turquoise-5"
            placeholder=" "
            required
          />
          <label className="cap absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm tracking-wider text-gray-500 duration-300 placeholder:text-fs-h6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-c-turquoise-4 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-c-turquoise-3">
            Seu e-mail
          </label>
        </div>

        {/* Mensagem */}
        <div className="group relative z-0 mb-5 w-full">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-c-turquoise-6 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-c-turquoise-5"
            placeholder=" "
            required
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm tracking-wider text-gray-500 duration-300 placeholder:text-fs-h6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-c-turquoise-4 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-c-turquoise-3">
            Sua mensagem
          </label>
        </div>

        <div className="mt-4 flex w-full justify-center md:mt-7">
          <DefaultButton type="submit" onClick={sendEmail} className="w-60">
            Enviar
          </DefaultButton>
        </div>
      </form>
    </div>
  );
}
export default Form;
