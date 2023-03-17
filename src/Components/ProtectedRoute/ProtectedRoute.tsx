import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const ProtectedRoute = ({ children }: any) => {
  const { user, loading }: any = useUserAuth();
  let location = useLocation();
  if (loading)
    return (
      <div className="loading-div">
        <h1>Loading</h1>
      </div>
    );

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
