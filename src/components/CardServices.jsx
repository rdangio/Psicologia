function CardServices() {
  const dataCard = [
    {
      id: "1",
      image: "/src/assets/images/service-1.jpg",
      text: "Not the answer yore looking for? Printing and typesetting inLorem Ipsum is simply dum",
    },
    {
      id: "2",
      image: "/src/assets/images/service-2.jpg",
      text: "asdfads asd fasdfasdf asdfsdfasd afsd a afsd fasd fasd fasd fa sdf asdf adsf asdf adsfasdfas",
    },
    {
      id: "3",
      image: "/src/assets/images/service-3.jpg",
      text: "Not the answer yore looking for? Printing and typesetting inLorem Ipsum is simply dum",
    },
  ];

  return (
    <div className="flex gap-20 h-[560px]">
      {dataCard.map((card) => (
        <div key={card.id} className="relative">
          <img
            className="rounded-tl-2xl shadow-xl rounded-2xl border-2 border-violet-300"
            src={card.image}
            alt=""
          />
          <div className="flex justify-center">
            <div className="bg-slate-200 absolute -mt-14 p-10 w-[85%] rounded-xl shadow-xl border-2 border-b-violet-400 ">
              <p>{card.text}</p>
              <div className="justify-center flex">
                <button className="absolute border-2 bg-purple-400 p-1 px-2 rounded-2xl font-bold">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardServices;
