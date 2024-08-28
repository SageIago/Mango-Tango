import { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#HOME">Home</a>
    </p>
    <p>
      <a href="#ABOUT">About Mango-Tango</a>
    </p>
    <p>
      <a href="#FEATURES">Extensive Features</a>
    </p>
    <p>
      <a href="#FUTURE">Future Possiblities</a>
    </p>
    <p>
      <a href="#BLOG">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  //USE THE USESTATE HOOK FOR TOGGLING TRUE AND FALSE
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="Hub_Navbar">
      <div className="Hub_Navbar-Links">
        <div className="Hub_Navbar_Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Hub_Navbar-Links_Container">
          <Menu />
        </div>
      </div>
      <div className="Hub_Navbar_Sign-In">
        <p>SPONSOR US</p>
        <button type="button">Get Membership Card</button>
      </div>
      <div className="Hub_Navbar_Menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="Hub_Navbar_Menu-Container scale-up-center">
            <div className="Hub_Navbar_Menu-Container-Links">
              <Menu />
              <div className="Hub_Navbar_Menu-Container-Links-Sign">
                <p>SPONSOR US</p>
                <button type="button">Get Membership Card</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
