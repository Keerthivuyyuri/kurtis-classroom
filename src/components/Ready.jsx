import readyImage from "../assets/ready-image.png";

function Ready() {
  const stats = [
    { color: "bg-[#315BFF]", text: "More than 50% of US teachers use Kurtis" },
    { color: "bg-[#35BDF6]", text: "Players in more than 200 countries" },
    { color: "bg-[#FF4054]", text: "Over 30 million public games available" },
    { color: "bg-[#FFBF2E]", text: "97% of the Fortune 500 use Kurtis" },
  ];

  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 grid gap-7 sm:grid-cols-2 lg:mb-16 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index} className="flex h-[48px] items-start gap-3">
              <div className={`h-full w-[4px] shrink-0 ${item.color}`}></div>
              <p className="max-w-[190px] text-[14px] font-extrabold leading-5 text-[#2b2722]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[460px_460px] lg:justify-between">
          <div className="flex justify-center lg:justify-start">
            <img
              src={readyImage}
              alt="Ready"
              className="w-full max-w-[260px] object-contain sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-[-1px] text-[#2b2722] sm:text-[44px] lg:text-[52px]">
              <span className="block">Ready for make</span>
              <span className="mt-2 block">learning fun!</span>
            </h2>

            <button className="mt-8 rounded bg-[#315BFF] px-8 py-3 text-sm font-bold text-white shadow-[0_5px_0_#203A9C] sm:px-10 sm:py-4">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ready;