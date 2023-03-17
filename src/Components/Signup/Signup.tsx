import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "../../context/UserAuthContext";
import "./Signup.css";
const Signup = () => {
  const { signInWithGoogle }: any = useUserAuth();
  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="signup-container">
      <div onClick={handleSignIn}>
        <span className="larger">
          <FcGoogle />
        </span>
        Signup With Google
      </div>
    </div>
  );
};

export default Signup;
