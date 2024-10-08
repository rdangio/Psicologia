const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        className="bg-slate-100 size-14 ali  rounded-[30%]"
        src={"/src/assets/logo-verde.jpg"}
        alt="logo"
      />
      <div className="font-bold font-['Helvetica'] ">
        <div className="flex">
          <p>Cláudia</p>
        </div>
        <div>
          <p className="ml-4">Dangió</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
