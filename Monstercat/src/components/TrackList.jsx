import playLogo from "../assets/icon/play.svg";
import shareLogo from "../assets/icon/share.svg";

let musicData = [
  {
    id: 1,
    name: "The Small Things",
    artist: "Conro",
    time: "3:35",
    songUrl: "",
  },
  {
    id: 2,
    name: "Without Your Love",
    artist: "Conro",
    time: "3:09",
    songUrl: "",
  },
  {
    id: 3,
    name: "Therapy",
    artist: "Conro",
    time: "3:35",
    songUrl: "",
  },
  {
    id: 4,
    name: "Fighters",
    artist: "Conro",
    time: "3:46",
    songUrl: "",
  },
  {
    id: 5,
    name: "Way Up",
    artist: "Conro",
    time: "3:32",
    songUrl: "",
  },
];

const SongList = () => {
  return musicData.map((song) => {
    return (
      <div className="mt-4 flex justify-between" id={song.id}>
        <div className="flex items-center space-x-4">
          <p>{song.id}</p>
          <img src={playLogo} className="cursor-pointer" alt="play" />
          <div>
            <h6 className="text-sm">{song.name}</h6>
            <p className="text-xs">{song.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p>{song.time}</p>
          <img src={shareLogo} alt="share" />
        </div>
      </div>
    );
  });
};

const TrackList = () => {
  return (
    <div className="px-8 mt-8">
      <h1 className="text-2xl">TRACK LIST</h1>
      <div className="space-y-6">
        <SongList />
      </div>
    </div>
  );
};

export default TrackList;
