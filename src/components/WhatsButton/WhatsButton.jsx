const Whatsapp = () => {
  return (
    <div className="">
      <a
        href="https://api.whatsapp.com/send?phone=5514996923650&text=Gostaria%20de%20ajuda?%20Vamos%20Convesar!"
        className="text-c-text2 fixed bottom-10 right-6 z-50 h-14 w-14 cursor-pointer rounded-full bg-c-whats text-center text-4xl shadow-lg transition-all ease-in-out hover:bg-c-whats-hover active:bg-c-whats-active"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={"/Logos/whatsapp.svg"}
          className="text-c-text2 ml-[10px] mt-2 w-9"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
