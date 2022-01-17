import React, { useEffect, useState } from "react";
import "../scss/components/Navbar.scss";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchPg from "../pages/SearchPg";
const Navbar = () => {
  // const [user, setUser] = useState({
  //   profilepicture:
  //     "https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg",
  //   username: "ko.lynz_b",
  // });
  const [user, setUser] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const [searchPg, setSearchPg] = useState(false);
  const pageScrolled = () => {
    window.scrollY > 100 ? setShowNav(true) : setShowNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", pageScrolled);
  }, []);

  return (
    <nav className={showNav && "navblue"}>
      <h2 className="logo">
        <Link to="/">CHILLAX</Link>
      </h2>
      {user ? (
        <>
          <ul className="navlinks">
            <li className="navlink">Home</li>
            <li className="navlink">Movies</li>
            <li className="navlink">TV shows</li>
          </ul>
          <div className="navleft">
            <div className="icon2" onClick={() => setSearchPg(!searchPg)}>
              <FiSearch />
            </div>
            <Link to="/watchlist">
              <div className="icon2">
                <AiOutlinePlus />
              </div>
            </Link>
            <div className="profile-sect">
              <figure className="profileimage">
                {user.profilepicture ? (
                  <img
                    src={user.profilepicture}
                    alt="profilepicture"
                    className="profilepicture"
                  />
                ) : (
                  <div className="icon">
                    <BiUser />
                  </div>
                )}
              </figure>
              <p className="username">{user.username}</p>
              <div className="icon">
                <FiChevronDown />
              </div>
              <ul className="profile-dropdown">
                <li className="dropdownlink">
                  <div className="icon">
                    <BiUser />
                  </div>
                  My Profile
                </li>
                <li className="dropdownlink">
                  <div className="icon">
                    <MdLogout />
                  </div>
                  logout
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="navnulluser">
          <Link to="/login">
            <p className="navlink">Login</p>
          </Link>
          <div className="line"></div>
          <Link to="/register">
            <p className="navlink">Register</p>
          </Link>
        </div>
      )}
      {searchPg && <SearchPg setSearchPg={setSearchPg} />}
    </nav>
  );
};

export default Navbar;
