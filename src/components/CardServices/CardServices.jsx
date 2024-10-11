function CardServices() {
  const dataCard = [
    {
      id: "1",
      image: "/src/assets/Images/service-1.jpg",
      title: "Ansiedade",
      text: "A preocupação excessiva, os pensamentos acelerados e repetitivos...",
    },
    {
      id: "2",
      image: "/src/assets/Images/service-2.jpg",
      title: "Relacionamento",
      text: "Discussões e desentendimentos frequentes, falta de contato físico, poucos momentos alegres...",
    },
    {
      id: "3",
      image: "/src/assets/Images/service-3.jpg",
      title: "Depressão",
      text: "Alterações no humor, voltadas principalmente aos sentimentos de tristeza...",
    },
  ];

  return (
    <section className="bg-slate-50 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center pt-7 items-center  w-[800px]  ">
        <h2
          className="text-[#4A7D7E] drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] 
            md:text-[40px] md:text-center
            sm:text-[27px] sm:text-center
            text-[17px] text-center
            font-bold"
        >
          Áreas de atuação
        </h2>

        <h3
          className="text-[#4A7D7E] drop-shadow-[_2px_1px_rgba(0,0,0,1.55)]
            md:text-[25px] md:text-center
            sm:text-[19px] sm:text-center
            text-[13px] text-center
            pt-3
            pb-8
            text-bold"
        >
          Seja atendido por uma profissional experiente e qualificada.
          Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
          Alívio para sua tristeza.
        </h3>
      </div>
      <div className="flex gap-20 h-[450px] w-[800px]">
        {dataCard.map((card) => (
          <div key={card.id} className="relative">
            <img
              className="rounded-tl-2xl shadow-xl rounded-2xl border-2 border-violet-300"
              src={card.image}
              alt=""
            />
            <div className="flex justify-center">
              <div className="bg-slate-200 absolute -mt-14 p-6 pb-14 w-[85%] rounded-xl shadow-xl border-2 border-b-violet-400 ">
                <p className="underline mb-2 font-bold text-center text-purple-950 text-lg border-b-purple-400 ">
                  {card.title}
                </p>
                <p className="text-black text-sm text-center">{card.text}</p>
                <div className="justify-center flex">
                  <button className="mt-3 absolute border-2 bg-purple-400 p-1 px-2 rounded-2xl font-bold hover:shadow-purple-800 hover:shadow-lg hover:text-white">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardServices;
