import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/logo.jpeg";
const Header = () => {
  return (
    <header>
      <div className="header-main">
        <div className="logo">
          {/* <h1 className="normal-logo"> J</h1>
          <h1 className="color-logo"> &</h1>
           <h1 className="normal-logo"> V</h1> */}
           <img src={logo} alt="" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              {" "}
              <Link to={"/policies"}> Policies</Link>
            </li>
            <li>
              {" "}
              <Link to={"/claims"}> Claims</Link>
            </li>
            <li>
              {" "}
              <Link to={"/contact"}> Contact</Link>
            </li>
          </ul>
        </nav>
        <button className="btn">
            Get a Quote
      </button>
      </div>
    </header>
  );
};

export default Header;
