const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <img
          className="w-28"
          src={"/src/assets/Logos/logo-psico-preto.webp"}
          alt="logo"
        />
      </div>

      <div className="text-center">
        <p className="font-eurofucence text-xl">
          C L Á U D I A <br />
          D A N G I Ó <br />
        </p>
        <span className="font-florencesans text-[10px]">
          PSICOLÓGA - CRP 06 / 136891
        </span>
      </div>
    </div>
  );
};

export default Logo;
