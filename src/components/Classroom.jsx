function Classroom() {
  const cards = [
    {
      title: "Classroom",
      text: "For generation of learning.",
      bg: "bg-[#315BFF]",
      img: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800",
    },
    {
      title: "Kurtis Classroom",
      text: "The next generation of corporate learning.",
      bg: "bg-[#2B251D]",
      img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800",
    },
    {
      title: "Premium for schools",
      text: "Create and teach lessons students will love.",
      bg: "bg-[#FFC400]",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
    },
  ];

  return (
    <section id="classes" className="bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold text-[#2b2722] sm:text-[28px] lg:text-[30px]">
            Amazing things are happening
          </h2>

          <div className="mx-auto mt-2 h-[5px] w-[75px] bg-[#315BFF]"></div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex h-[180px] w-full overflow-hidden rounded-[22px] ${card.bg} sm:h-[190px]`}
            >
              <div className="relative z-10 flex w-[58%] flex-col justify-center p-5 sm:p-6">
                {index === 2 && (
                  <span className="mb-2 w-fit rounded-full bg-[#2b2722] px-3 py-1 text-[10px] font-bold text-white">
                    New
                  </span>
                )}

                <h3
                  className={`text-[22px] font-extrabold leading-tight sm:text-[24px] lg:text-[28px] ${
                    index === 2 ? "text-[#2b2722]" : "text-white"
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`mt-3 text-[12px] leading-5 sm:text-[13px] ${
                    index === 2 ? "text-[#2b2722]" : "text-white/80"
                  }`}
                >
                  {card.text}
                </p>

                <button
                  className={`mt-3 text-left text-[12px] font-extrabold sm:mt-4 sm:text-[13px] ${
                    index === 2 ? "text-[#2b2722]" : "text-white"
                  }`}
                >
                  Learn more
                </button>
              </div>

              <img
                src={card.img}
                alt={card.title}
                className="absolute right-0 top-0 h-full w-[46%] object-cover sm:w-[48%]"
              />

              {index === 0 && (
                <div className="absolute right-[55px] top-0 h-full w-[120px] rotate-45 bg-[#4D73FF] sm:right-[70px] sm:w-[150px]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center gap-3 lg:mt-8">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#315BFF]"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200"></span>
        </div>
      </div>
    </section>
  );
}

export default Classroom;