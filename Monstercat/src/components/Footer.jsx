import arrowRight from "../assets/icon/arrow-right.svg";

const Footer = () => {
  return (
    <>
      <div className="px-8 py-10 mt-20 border-t-2 border-b-2 border-white">
        <div className="uppercase">
          <ul className="cursor-pointer">
            <li>about monstercat</li>
            <li>contact us</li>
            <li>careers</li>
            <li>news</li>
            <li>press</li>
            <li>terms of service</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="mt-10">
          <h6>MONSTERCAT NEWS</h6>
          <p class="mt-4 text-xs">
            Don't miss a thing, stay up to date with the latest news for us.
          </p>
          <div className="mt-6 pb-2 flex justify-between items-center border-b-2 border-gray-700">
            <input
              type="email"
              placeholder="Enter email"
              className="text-xs bg-transparent outline-none"
            />
            <img
              src={arrowRight}
              alt="arrow-right"
              className="cursor-pointer transition duration-300 
             filter hover:invert hover:brightness-0
             "
            />
          </div>
        </div>
      </div>
      <p className="text-xs mt-4 px-8 text-center">
        2011 - 2024 © Monstercat, All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
