import heroIllustration from "../assets/hero.png";
import appStore from "../assets/apple-play.png";
import playStore from "../assets/google-play.png";

function Hero() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-6 lg:pb-14 lg:pt-8">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <div className="text-center lg:pl-14 lg:text-left">
          <h2 className="text-[42px] font-extrabold leading-[1.15] tracking-[-1px] text-[#2b2722] sm:text-[52px] md:text-[60px] lg:text-[66px]">
            Make <br />
            learning fun!
          </h2>

          <p className="mx-auto mt-6 max-w-[420px] text-[17px] leading-[1.5] text-[#6d645d] sm:text-[18px] md:text-[20px] lg:mx-0">
            Any subject, in any language, on any{" "}
            <br className="hidden sm:block" />
            device, for all ages!
          </p>

          <button className="mt-8 rounded bg-[#335CFF] px-10 py-3 text-[14px] font-bold text-white transition hover:bg-[#2347d9] sm:px-12 sm:py-4 lg:px-14">
            Sign up for free
          </button>

          <div className="mt-8 flex flex-col items-center lg:items-start">
            <p className="text-[14px] font-semibold tracking-wide text-[#2B2929]">
              or download the apps:
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
              <img
                src={appStore}
                alt="App Store"
                className="h-[36px] sm:h-[40px]"
              />

              <img
                src={playStore}
                alt="Google Play"
                className="h-[36px] sm:h-[40px]"
              />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroIllustration}
            alt="Learning Illustration"
            className="
              w-full
              max-w-[300px]
              object-contain
              sm:max-w-[380px]
              md:max-w-[430px]
              lg:max-w-[494px]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;