import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";
import { auth, provider } from ".././../api/firebase";

export const userAuthContext = createContext(null);
export function UserAuthContextProvider({ children }: any) {
  const [user, setUser] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        return <Navigate to="/" state={{ from: location }} replace />;
      })
      .catch((error: any) => {
        return false;
      });
  };
  const googleSignOut = () => {
    auth.signOut();
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        signInWithGoogle,
        user,
        googleSignOut,
        loading,
        count,
        setCount,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
