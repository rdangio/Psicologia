const Whatsapp = () => {
  return (
    <div className="">
      <a
        href="https://api.whatsapp.com/send?phone=5514996923650&text=Gostaria%20de%20ajuda?%20Vamos%20Convesar!"
        className="fixed cursor-pointer w-14 h-14 bottom-10 right-6 bg-c-whats hover:bg-c-whats-hover active:bg-c-whats-active ease-in-out transition-all text-c-text2 rounded-full text-center text-4xl shadow-lg z-50"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={"/src/assets/Logos/whatsapp.svg"}
          className="mt-2 ml-[10px] text-c-text2 w-9"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
