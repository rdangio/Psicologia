import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import CardServices from "../../components/CardServices/CardServices";
import CardValues from "../../components/CardValues/CardValues";
import CardsSessions from "../../components/CardsSessions/CardsSessions";
import './index.css';

const App = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      {/* Container para toda a tela */}
      <div className="w-full max-w-screen-xl mx-auto bg-white p-4">
        
        {/* Navbar */}
        <Nav />

        {/* Carousel */}
        <Carousel />

        {/* Largura de Segurança - 1440px */}
        <div className="max-w-[1440px] mx-auto bg-green-100 p-4">
          <CardServices />

          {/* Container principal - 1216px */}
          <div className="max-w-[1216px] mx-auto bg-blue-100 p-4">
            {/* Seção personalizada com imagem e texto */}
            <section className="w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-purple-400 to-90% ">
              <div className="w-[800px] gap-16 flex justify-center items-center h-[380px] font-bold">
                <img
                  className="-rotate-[20deg] shadow-lg shadow-purple-950 rounded-xl max-w-[20%] max-h-[100%]"
                  src="/src/assets/Images/claudia.jpg"
                  alt="Imagem de Cláudia"
                />
                <div className="flex flex-col w-[50%] items-start p-10 text-purple-950">
                  <h2 className="text-2xl font-extrabold">Olá,</h2>
                  <h3 className="pt-1 pb-2">
                    Eu sou a Cláudia, sabe como posso te ajudar?
                  </h3>
                  <p>
                    Com encontros regulares e ética profissional, cada sessão é um
                    passo em direção ao crescimento pessoal.
                  </p>
                  <h3 className="pt-3">Call me on: +123 98 8887</h3>
                </div>
              </div>
            </section>

            {/* Card de Valores */}
            <CardValues />

            {/* Sessões de Cartões */}
            <CardsSessions />
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
