const Whatsapp = () => {
  return (
    <div className="">
      <a
        href="https://api.whatsapp.com/send?phone=5514996923650&text=Gostaria%20de%20ajuda?%20Vamos%20Convesar!"
        className="fixed cursor-pointer w-14 h-14 bottom-10 right-6 bg-whats-green hover:bg-whats-green-hover active:bg-whats-green-active ease-in-out transition-all text-white rounded-full text-center text-4xl shadow-lg z-50"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={"/src/assets/Logos/whatsapp.svg"}
          className="mt-2 ml-[10px] text-white w-9"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
