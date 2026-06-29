import createImg from "../assets/create.png";
import hostImg from "../assets/host.png";
import playImg from "../assets/play.png";

function HowWorks() {
  return (
    <section id="works" className="bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[900px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[22px] font-extrabold text-[#2b2722] sm:text-[26px] lg:text-[30px]">
            How does Kurtis work?
          </h2>
          <div className="mx-auto mt-2 h-[4px] w-[58px] bg-[#315BFF] sm:w-[70px] lg:h-[5px] lg:w-[85px]"></div>
        </div>

        {/* Create */}
        <div className="mt-10 grid items-center gap-8 sm:mt-12 md:grid-cols-2 lg:gap-12">
          <img
            src={createImg}
            alt="Create"
            className="mx-auto w-full max-w-[260px] object-contain sm:max-w-[300px] lg:max-w-[340px]"
          />

          <div className="text-center md:text-left">
            <h3 className="text-[22px] font-extrabold text-[#2b2722] sm:text-[24px] lg:text-[28px]">
              Create
            </h3>
            <p className="mx-auto mt-3 max-w-[320px] text-[15px] leading-[1.55] text-[#4f4a45] sm:text-[16px] md:mx-0 lg:text-[18px]">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>

        {/* Host */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h3 className="text-[22px] font-extrabold text-[#2b2722] sm:text-[24px] lg:text-[28px]">
              Host or share
            </h3>
            <p className="mx-auto mt-3 max-w-[320px] text-[15px] leading-[1.55] text-[#4f4a45] sm:text-[16px] md:mx-0 lg:text-[18px]">
              Host a live game with questions on a big screen or share a game
              with remote players.
            </p>
          </div>

          <img
            src={hostImg}
            alt="Host or share"
            className="order-1 mx-auto w-full max-w-[280px] object-contain sm:max-w-[320px] md:order-2 lg:max-w-[360px]"
          />
        </div>

        {/* Play */}
        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <img
            src={playImg}
            alt="Play"
            className="mx-auto w-full max-w-[270px] object-contain sm:max-w-[310px] lg:max-w-[350px]"
          />

          <div className="text-center md:text-left">
            <h3 className="text-[22px] font-extrabold text-[#2b2722] sm:text-[24px] lg:text-[28px]">
              Play
            </h3>
            <p className="mx-auto mt-3 max-w-[320px] text-[15px] leading-[1.55] text-[#4f4a45] sm:text-[16px] md:mx-0 lg:text-[18px]">
              Game on! Join a kahoot with a PIN provided by the host and answer
              questions on your device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWorks;