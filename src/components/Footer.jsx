import "./footer.css"
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo"><img src="logo.png" width='100px' /></h2>
          <p className="footer-text">
            Best football jerseys from the top clubs and national teams.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p><MdOutlineMail className="footer-icon" /> hachaayoub88@gmail.com</p>
          <p><IoMdCall className="footer-icon" /> +212 771980164</p>
          <p><IoLocationOutline className="footer-icon" /> Morocco, Casablanca</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 HachaStore — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
