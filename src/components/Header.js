import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img
      className='h-28 p-2'
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
          <li className="px-2"><Link to={"/instamart"}>Instamart</Link></li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
