import PaymentImage from "../../assets/payments.png";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Footer.css";
const Footer = () => {
  const { googleSignOut, user }: any = useUserAuth();
  return (
    <div className="footer-container">
      {user && (
        <div className="letter">
          <button onClick={googleSignOut} className="signout-button">
            LOGOUT
          </button>
        </div>
      )}
      {!user && user !== "" && (
        <div className="letter">
          <h4>NEWSLETTER</h4>
          <h3>Sign Up to NewsLetter</h3>
          <div className="email">
            <input type="email" />
            <button>Enter</button>
          </div>
        </div>
      )}
      <div className="footer">
        <h5>Rahul Parihar Pvt. Lim.</h5>
        <img src={PaymentImage} alt="payment image" />
      </div>
    </div>
  );
};

export default Footer;
