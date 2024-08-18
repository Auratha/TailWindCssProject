import Navbar from "./components/Navbar.jsx";
import BgImage from "./components/BgImage.jsx";
import MusicInfoSection from "./components/MusicInfo.jsx";
import TrackList from "./components/TrackList.jsx";
import MusicVideo from "./components/MusicVideo.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="font-monument bg-black text-gray-50 tracking-widest relative">
        <Navbar />
        <BgImage />
        <MusicInfoSection />
        <TrackList />
        <MusicVideo />
        <Footer />
      </div>
    </>
  );
}

export default App;
