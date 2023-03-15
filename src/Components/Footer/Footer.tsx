import PaymentImage from "../../assets/payments.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="letter">
        <h4>NEWSLETTER</h4>
        <h3>Sign Up to NewsLetter</h3>
        <div className="email">
          <input type="email" />
          <button>Enter</button>
        </div>
      </div>
      <div className="footer">
        <h5>Rahul Parihar Pvt. Lim.</h5>
        <img src={PaymentImage} alt="payment image" />
      </div>
    </div>
  );
};

export default Footer;
