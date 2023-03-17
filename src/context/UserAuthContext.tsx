import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";
import { auth, provider } from ".././../api/firebase";

export const userAuthContext = createContext(null);
export function UserAuthContextProvider({ children }: any) {
  const [user, setUser] = React.useState("");
  console.log(user);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log(result);
        return <Navigate to="/home" state={{ from: location }} replace />;
      })
      .catch((error: any) => {
        console.log(error);
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
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ signInWithGoogle, user, googleSignOut }}>
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
