import pauseLogo from "../assets/icon/pause.svg";
import shareLogo from "../assets/icon/share.svg";

const MusicInfoSection = () => {
  return (
    <>
      <div className="px-8 pt-28 py-1 z-10 relative">
        <div>
          <img src="https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCLP017%2Fcover%3F2ee434f2-4499-4c30-a937-4aec2b4ac1fc&width=600" />
          <p className="my-8 italic text-sm">
            <span className="text-green-500">Instinct</span> — Released May 22,
            2020
          </p>
        </div>
        <div>
          <h2 className="text-2xl">LEVEL DAYS</h2>
          <p>CONRO</p>
          <div className="mt-2 text-sm flex space-x-2">
            <button className="py-2 px-6 text-white bg-emerald-500 flex items-center">
              <img className="size-6 mr-2" src={pauseLogo} alt="pause" />
              LISTEN NOW
            </button>
            <button className="py-2 px-6 border-2 border-white flex items-center">
              <img className="size-6 mr-2" src={shareLogo} alt="pause" />
              SHARE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicInfoSection;
