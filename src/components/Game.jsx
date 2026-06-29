import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Game({ showGamePage, setShowGamePage }) {

  if (showGamePage) {
    return (
      <section className="bg-white px-4 py-6 sm:px-6 lg:px-6 lg:py-8">
        <div className="flex flex-col items-center">
          <div className="flex h-[300px] w-full max-w-[950px] items-center justify-center bg-[#FFC400] sm:h-[420px] lg:h-[500px]">
            <div className="grid rotate-[14deg] grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    h-[70px] w-[70px]
                    border-[4px] border-black
                    sm:h-[90px] sm:w-[90px]
                    lg:h-[110px] lg:w-[110px]
                    lg:border-[5px]
                  "
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowGamePage(false)}
            className="mt-6 text-center text-[16px] font-medium text-[#3155FF] underline sm:text-[18px] lg:text-[20px]"
          >
            Take a look to our features games
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Heading */}
      <section className="bg-white px-4 py-8 text-center lg:py-8">
        <h2 className="text-[24px] font-extrabold text-[#2B2929] sm:text-[26px] lg:text-[28px]">
          Do you have a game code?
        </h2>

        <p className="mt-2 text-[15px] font-medium text-[#2B2929] sm:text-[16px] lg:text-[18px]">
          Let's play for a while!
        </p>
      </section>

      {/* Yellow Section */}
      <section className="flex min-h-[280px] items-center justify-center bg-[#FFC43B] px-4 sm:min-h-[360px] lg:min-h-[450px] lg:px-6">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Kurtis Classroom"
            className="h-[34px] w-auto brightness-0 invert sm:h-[40px] lg:h-[48px]"
          />

          <div className="mt-6 flex h-[48px] w-full max-w-[320px] items-center rounded-full bg-white px-4 shadow-sm sm:max-w-[340px] lg:mt-8 lg:h-[52px] lg:max-w-[360px] lg:px-5">
            <input
              type="text"
              placeholder="Write the code here"
              className="flex-1 bg-transparent text-[14px] font-semibold text-[#999999] outline-none placeholder:text-[#999999] sm:text-[15px] lg:text-[17px]"
            />

            <button className="flex h-8 w-8 items-center justify-center rounded-full text-[#999999] lg:h-9 lg:w-9">
              <ArrowRight size={26} strokeWidth={2.5} className="lg:hidden" />
              <ArrowRight
                size={34}
                strokeWidth={2.5}
                className="hidden lg:block"
              />
            </button>
          </div>

          <p className="mt-4 text-[12px] font-medium text-white/60 lg:text-[14px]">
            Or try with 1234
          </p>
        </div>
      </section>

      {/* Bottom Link */}
      <section className="bg-white px-4 py-8 text-center">
        <p className="text-[18px] text-[#555555] sm:text-[22px] lg:text-[26px]">
          Still more?{" "}
          <button
            onClick={() => setShowGamePage(true)}
            className="font-extrabold text-[#3155FF] underline underline-offset-2"
          >
            Take a look to our features games
          </button>
        </p>
      </section>
    </>
  );
}