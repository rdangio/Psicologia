
const Banner = () => {
  return (

      <section className="w-full flex justify-center items-center bg-gradient-to-r from-c-turquoise-5 from-10% via-c-turquoise-4 via-30% to-c-turquoise-2 to-90% ">
        <div className="w-[900px] mx-auto flex justify-center items-center  h-[300px] font-roboto">
          <img
            className="m-20 -rotate-[20deg] shadow-xl shadow-c-turquoise-5 rounded-xl max-w-[20%] max-h-[100%]"
            src="/src/assets/Images/claudia.jpg"
            alt=""
          />
          <div className="flex flex-col  text-c-turquoise-5">
            <h2 className="text-fs-h2">Olá,</h2>
            <p className="text-fs-h5">
              Sou a Cláudia, sabe como posso te ajudar?{" "}
            </p>
            <p className="text-fs-h6">
              Com encontros regulares e ética profissional, cada sessão é um
              passo em direção ao crescimento pessoal.
            </p>
            {/* <h3 className="pt-3">Call me on : +123 98 8887</h3> */}
          </div>
        </div>
      </section>

  );
};

export default Banner;
