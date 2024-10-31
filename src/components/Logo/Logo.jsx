const Logo = () => {
  return (
    <div className="flex sm:flex-row items-center gap-3 min-w-[150px]">
      <div>
        <img
          className="w-24 sm:w-28 min-w-[80px] sm:min-w-[100px]"
          src={"/src/assets/Logos/logo-psico-preto.webp"}
          alt="logo"
        />
      </div>

      <div className="text-center sm:text-left">
        <p className="font-eurofucence text-center text-sm sm:text-xl whitespace-nowrap text-c-turquoise-1">
          C L Á U D I A <br />
          D A N G I Ó <br />
        </p>
        {/* <span className="font-florencesans text-[8px] sm:text-[10px] whitespace-nowrap">
          PSICOLÓGA - CRP 06 / 136891
        </span> */}
      </div>
    </div>
  );
};

export default Logo;
