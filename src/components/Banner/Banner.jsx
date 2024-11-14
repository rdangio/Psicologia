import { Description } from "../Description/Description";
import { Title } from "../Titles/Titles";



const Banner = () => {
  return (
    // Banner - faixa que ocupa 100% width e fica degrade
    <div className="w-full bg-gradient-to-b from-c-turquoise-5 from-10% via-c-turquoise-4 via-30% to-c-turquoise-2 to-90% sm:bg-gradient-to-r">
      {/* div que abraça tudo */}
      <div className="container mb-10 flex flex-col items-center justify-center gap-x-10 font-roboto sm:h-[250px] sm:flex-row md:h-[300px] lg:h-[400px]">
        {/* tratamento da imagem */}
        <img
          className="my-10 max-h-[70%] max-w-[50%] rounded-xl border-2 border-solid border-c-turquoise-5 shadow-xl shadow-c-turquoise-5 sm:ml-[3.5rem] sm:max-w-[25%] sm:-rotate-[22deg] lg:ml-12 lg:max-w-[25%] xl:max-w-[40%]"
          src="/src/assets/Images/claudia.jpg"
          alt=""
        />

        {/* div com os textos */}
        <div className="flex flex-col items-center justify-center sm:w-[27rem] sm:items-start sm:p-1 lg:ml-10">
          <Title className="text-c-turquoise-5 font-roboto-bold ">Olá,</Title>
          <Description className="">
            sou a Cláudia, sabe como posso te ajudar?
          </Description>
          <Description className="text-justify">
            Com encontros regulares e ética profissional, cada sessão é um passo
            em direção ao crescimento pessoal.
          </Description>
        </div>
      </div>
    </div>
  );
};

export default Banner;
