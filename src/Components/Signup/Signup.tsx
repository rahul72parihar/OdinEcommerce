import { FcGoogle, FcHome, FcList } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Signup.css";
const Signup = () => {
  const { signInWithGoogle, user }: any = useUserAuth();
  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="signup-container">
      {!user && user !== "" && (
        <div onClick={handleSignIn} className="signin-button">
          <span className="larger">
            <FcGoogle />
          </span>
          Signup With Google
        </div>
      )}
      {user && (
        <div className="signin-after">
          <Link to="/home">
            <div className="signin-button">
              <span className="larger">
                <FcHome />
              </span>
              Home
            </div>
          </Link>
          <Link to="/products">
            <div className="signin-button">
              <span className="larger">
                <FcList />
              </span>
              All Products
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Signup;
