import playLogo from "../assets/icon/play.svg";
import shareLogo from "../assets/icon/share.svg";

const MusicInfoSection = () => {
  return (
    <>
      <div className="px-8 pt-28 py-1 z-10 relative md:w-[80%] md:mx-auto lg:flex lg:items-center">
        <div class="lg:w-1/2">
          <img
            className="w-full lg:w-[80%] mx-auto h-auto"
            src="https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCLP017%2Fcover%3F2ee434f2-4499-4c30-a937-4aec2b4ac1fc&width=600"
          />
          <p className="my-8 italic text-sm sm:mt-20 lg:text-xs lg:hidden">
            <span className="text-green-500">Instinct</span> — Released May 22,
            2020
          </p>
        </div>
        <div class="lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl">LEVEL DAYS</h2>
          <p className="lg:mt-1 lg:text-lg">CONRO</p>
          <div className="mt-2 lg:mt-10 text-xs sm:text-sm flex space-x-2">
            <button className="py-2 px-4 sm:px-6 text-white bg-emerald-500 flex items-center hover:bg-white hover:text-black transition-all duration-300">
              <img
                className="size-6 mr-2 play-logo"
                src={playLogo}
                alt="pause"
              />
              LISTEN NOW
            </button>
            <button className="py-2 px-4 sm:px-6 border-2 border-white flex items-center hover:bg-white hover:text-black transition-all duration-300">
              <img
                className="size-6 mr-2 share-logo"
                src={shareLogo}
                alt="pause"
              />
              SHARE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicInfoSection;
