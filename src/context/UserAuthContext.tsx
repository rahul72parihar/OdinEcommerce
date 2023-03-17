import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";
import { auth, provider } from ".././../api/firebase";

export const userAuthContext = createContext(null);
export function UserAuthContextProvider({ children }: any) {
  const [user, setUser] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        return <Navigate to="/" state={{ from: location }} replace />;
      })
      .catch((error: any) => {
        return false;
      });
  };
  // const unsubscribe = () => {
  //   setUser("");
  //   console.log("UNSUBSCRIBE");
  // };
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
      value={{ signInWithGoogle, user, googleSignOut, loading }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
