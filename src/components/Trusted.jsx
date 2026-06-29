import { BookOpen, Presentation, Armchair, Smartphone } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "At School",
    text: "Engaging group and distance learning for teachers and students.",
    color: "bg-[#3B5BFF]",
  },
  {
    icon: Presentation,
    title: "At work",
    text: "For training, e-learning, interactive presentations and more.",
    color: "bg-[#FFBF2E]",
  },
  {
    icon: Armchair,
    title: "At home",
    text: "Apps and games for family fun or home study.",
    color: "bg-[#35BDF6]",
  },
  {
    icon: Smartphone,
    title: "Learning apps",
    text: "Engage kids with the Kahoot! family of learning apps.",
    color: "bg-[#FF4054]",
  },
];

function Trusted() {
  return (
    <section className="bg-[#f2f2f2] px-5 py-12 sm:px-8 sm:py-14 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <h2 className="text-[26px] font-extrabold text-[#2b2722] sm:text-[30px] lg:text-[34px]">
            Who is Kurtis for?
          </h2>

          <div className="mx-auto mt-2 h-[5px] w-[80px] bg-[#315BFF] sm:w-[95px] lg:h-[6px] lg:w-[105px]"></div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={24} className="text-white" strokeWidth={2.3} />
                </div>

                <h3 className="mt-5 text-[20px] font-extrabold text-[#2b2722] lg:mt-8 lg:text-[21px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[260px] text-[15px] leading-[1.55] text-[#5f574f] sm:max-w-[220px] lg:mt-5 lg:text-[16px]">
                  {item.text}
                </p>

                <button className="mt-5 text-[14px] font-extrabold text-[#4b433c] lg:mt-8 lg:text-[15px]">
                  Learn more
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <button className="rounded bg-[#315BFF] px-7 py-3 text-[13px] font-extrabold text-white shadow-[0_5px_0_#1d348f] sm:px-8 sm:py-4 sm:text-sm">
            SIGN UP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Trusted;