import readyImage from "../assets/ready-image.png";

function Ready() {
  const stats = [
    {
      color: "bg-[#315BFF]",
      text: "More than 50% of US teachers use Kurtis",
    },
    {
      color: "bg-[#35BDF6]",
      text: "Players in more than 200 countries",
    },
    {
      color: "bg-[#FF4054]",
      text: "Over 30 million public games available",
    },
    {
      color: "bg-[#FFBF2E]",
      text: "97% of the Fortune 500 use Kurtis",
    },
  ];

  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        {/* Stats */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:mb-20 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index} className="flex h-[48px] items-start gap-3">
              <div className={`h-full w-[4px] shrink-0 ${item.color}`}></div>

              <p className="max-w-[190px] text-[14px] font-extrabold leading-5 text-[#2b2722]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Ready Section */}
        <div className="grid items-center gap-10 lg:grid-cols-[541px_540px] lg:justify-between lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <img
              src={readyImage}
              alt="Ready"
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] md:max-w-[390px] lg:max-w-[440px]"
            />
          </div>

          <div className="flex justify-center text-center lg:justify-end lg:text-left">
            <div className="w-full max-w-[540px]">
              <h2 className="text-[32px] font-extrabold tracking-[-1px] text-[#2b2722] sm:text-[48px] lg:text-[58px]">
                <span className="block">Ready for make</span>
                <span className="mt-3 block">learning fun!</span>
              </h2>

              <button className="mt-8 rounded bg-[#315BFF] px-8 py-3 text-sm font-bold text-white shadow-[0_5px_0_#203A9C] transition hover:bg-[#244cf2] sm:px-10 sm:py-4 lg:mt-10">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ready;
