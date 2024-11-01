
const Banner = () => {
  return (
      // Banner - faixa que ocupa 100% width e fica degrade
      <div className="w-full bg-gradient-to-b sm:bg-gradient-to-r from-c-turquoise-5 from-10% via-c-turquoise-4 via-30% to-c-turquoise-2 to-90% ">
        
        {/* div que abraça tudo */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-10  
                        sm:h-[250px] md:h-[300px] lg:h-[400px] font-roboto mb-10">
          
          {/* tratamento da imagem */}
          <img
            className="sm:ml-[3.5rem] lg:ml-12 sm:-rotate-[22deg] shadow-xl shadow-c-turquoise-5 rounded-xl 
            sm:max-w-[25%] lg:max-w-[25%] xl:max-w-[20%] max-w-[60%] max-h-[100%]
            my-10"
            src="/src/assets/Images/claudia.jpg"
            alt=""
          /> 

          {/* div com os textos */}
          <div className="flex flex-col justify-center items-center sm:items-start text-c-turquoise-5 sm:p-1 lg:ml-10  sm:w-[27rem]">
            <h2 className="sm:text-fs-h5 lg:text-fs-h2 font-bold ">Olá,</h2>
            <p className="sm:text-fs-h6 md:text-fs-h6 lg:text-fs-h4 px-14 pb-3 text-center sm:text-left sm:p-0 sm:pr-[0.8rem]">
              sou a Cláudia, sabe como posso te ajudar?
            </p>
            <p className="sm:text-fs-h7 md:text-fs-h6 lg:text-fs-h5 sm:text-left sm:w-[21rem] px-14 sm:p-0 text-justify mb-3">
              Com encontros regulares e ética profissional, cada sessão é um
              passo em direção ao crescimento pessoal.
            </p>
            
          </div>
        </div>
      </div>

  );
};

export default Banner;
