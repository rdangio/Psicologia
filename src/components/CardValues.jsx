function CardValues() {
  const dataValue = [
    {
      id: "1",
      title: "Missão",
      text: "Proporcionar um ambiente seguro e acolhedor onde nossos pacientes possam explorar seus pensamentos, emoções e comportamentos. Nossa missão é oferecer atendimento psicológico de alta qualidade, com empatia e respeito, promovendo o bem-estar emocional e o desenvolvimento pessoal de cada indivíduo que atendemos.",
    },
    {
      id: "2",
      title: "Visão",
      text: "Ser uma referência em serviços de saúde mental, reconhecida por nossa abordagem humanizada, ética e baseada em evidências científicas. Almejamos ser um ponto de apoio para nossos pacientes em sua jornada de autoconhecimento e crescimento pessoal, contribuindo para uma sociedade mais consciente e equilibrada.",
    },

  ];
  return (
    <div className="grid place-content-center">
      <div className="w-[800px] gap-6 grid grid-cols-2 mt-14">
        {dataValue.map((values) => (
          <div key={values.id} className="bg-slate-200 rounded-xl shadow-xl shadow-gray-600 border-violet-300 border-2">
            <p className="text-xl pt-5 text-center font-bold underline text-violet-950">{values.title}</p>
            <p className="text-center text-sm p-6 pt-3">{values.text}</p>
          </div>
        ))}
        <div className="bg-slate-200 rounded-xl w-[800px] flex flex-col shadow-xl shadow-gray-600 border-violet-300 border-2">
          <p className="text-xl pt-5 text-center font-bold underline text-violet-950">Valores</p>
          <p className="text-center text-sm p-6 pt-3">
          <b className="underline">Empatia:</b> Colocamos o respeito e a compreensão dos sentimentos de nossos pacientes em primeiro lugar, garantindo um ambiente seguro e acolhedor. 
          <b className="underline">Ética:</b>  Atuamos com integridade e responsabilidade, preservando a confidencialidade e os direitos dos nossos pacientes. 
          <b className="underline">Respeito à Individualidade:</b> Valorizamos a diversidade e reconhecemos que cada pessoa é única, adaptando nossas abordagens para atender às necessidades específicas de cada paciente. 
          <b className="underline">Compromisso com o Crescimento:</b> Estamos sempre em busca de novas práticas e conhecimentos para oferecer as melhores soluções para nossos pacientes. 
          <b className="underline">Humanização:</b>  Tratamos nossos pacientes com atenção e cuidado, colocando sempre o ser humano em primeiro lugar em todos os aspectos do nosso trabalho.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardValues;
