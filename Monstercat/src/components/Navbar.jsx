const Navbar = () => {
  return (
    <>
      <nav className="z-20 w-full px-4 h-14 bg-black flex justify-between items-center fixed">
        <img
          className="size-10"
          src="https://cdn.monstercat.com/monstercat-logo.webp"
          alt="Monstercat logo"
        />
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
