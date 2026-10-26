import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-list">
          <h3 className="footer-heading">Services</h3>
          <ul>
            <li>
            <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/policies"}> Policies</Link>
            </li>
            <li>
              <Link to={"/claims"}> Claims</Link>
            </li>
            <li>
              <Link to={"/contact"}> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li>
            <Link to={"/schoolBusInsurance"}>School Bus Insurance</Link>
            </li>
            <li>
              <Link to={"/motorInsurance"}>Motor Insurance</Link>
            </li>
            <li>
              <Link to={"/pickupInsurance"}> Pickup Insurance</Link>
            </li>
            <li>
              <Link to={"/claims"}> Car & Two-Wheeler Insurance</Link>
            </li>
            <li>
              <Link to={"/lifeInsurance"}> Life Insurance</Link>
            </li>
            <li>
              <Link to={"/healthInsurance"}> Health Insurance</Link>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h3 className="footer-heading">Get In Touch</h3>
          <ul>
            <li>
            <Link to={"/"}>
              📍 123 Financial Avenue, Connaught Place, New Delhi - 110001
            </Link>
            </li>
            <li>
              <Link to={"/about"}>📧 Email: support@safelife.com</Link>
            </li>
            <li>
              <Link to={"/policies"}> 📞 Helpline: 1800-123-456</Link>
            </li>
          </ul>
        </div>
      </div>
      <h4>©2025 J&V All Rights Reserved.</h4>
    </footer>
  );
};

export default Footer;
