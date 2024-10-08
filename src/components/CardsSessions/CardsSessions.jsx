function CardsSessions() {
  const dataSessions = [
    {
      id: "1",
      title: "Terapia Individual",
      imagem: "/src/assets/images/session/therapy-1.jpg",
    },
    {
      id: "2",
      title: "Terapia de Casais",
      imagem: "/src/assets/images/session/therapy-2.jpg",
    },
    {
      id: "3",
      title: "Sessões On-Line",
      imagem: "/src/assets/images/session/therapy-3.jpg",
    },
    {
      id: "4",
      title: "Terapia de Grupo",
      imagem: "/src/assets/images/session/therapy-4.jpg",
    },
    {
      id: "5",
      title: "Grupos para Empresas",
      imagem: "/src/assets/images/session/therapy-5.jpg",
    },
  ];

  return (
    <div className="bg-white h-[600px] flex flex-col  justify-center items-center">
      <div className="w-[800px] text-center">
        <p className="underline pt-3  font-bold text-xl">
          Tipos de Sessões
        </p>
        <p className="pt-5 pb-10 font-bold">
          Atuamos com diversos formatos de sessões para melhor atender a cada
          situação
        </p>

        <div className="grid grid-rows-2 grid-cols-3 gap-3">
          {dataSessions.map((sessions) => (
            <div className="border-2 border-violet-800 shadow-xl shadow-gray-600 " key={sessions.id}>
              <img className="" src={sessions.imagem} alt="" />
              <h2 className="bg-white text-center font-bold pl-3">
                {sessions.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsSessions;
