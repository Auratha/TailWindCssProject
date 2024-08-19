import insta from "../assets/icon/insta.svg";
import tiktok from "../assets/icon/tiktok.svg";
import x from "../assets/icon/x.svg";
import twitch from "../assets/icon/twitch.svg";
import facebook from "../assets/icon/facebook.svg";
import discord from "../assets/icon/discord.svg";

const Navbar = () => {
  return (
    <>
      <nav className="w-full px-4 lg:px-16 lg:pt-20 h-14 z-20 bg-black lg:bg-transparent flex justify-between items-center fixed">
        <img
          className="size-10 lg:size-16"
          src="https://cdn.monstercat.com/monstercat-logo.webp"
          alt="Monstercat logo"
        />
        <div className="hidden sm:flex sm:items-center sm:space-x-8 lg:flex-col lg:space-y-8 lg:absolute lg:top-[9em] lg:right-[4.2em] lg:space-x-0 cursor-pointer">
          <img className="size-4" src={insta} alt="instagram" />
          <img className="size-5" src={tiktok} alt="tiktok" />
          <img className="size-4" src={x} alt="x" />
          <img className="size-5" src={twitch} alt="twitch" />
          <img className="size-5" src={facebook} alt="facebook" />
          <img className="size-5" src={discord} alt="discord" />
        </div>

        <svg
          class="fill-current size-6 text-white cursor-pointer"
          viewBox="0 0 35 22"
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
        >
          <title>Menu - Open</title>
          <path d="M0 0h35v2H0zM0 10h35v2H0zM0 20h35v2H0z"></path>
        </svg>
      </nav>
    </>
  );
};

export default Navbar;
