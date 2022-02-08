import React from "react";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isAuthenticated as isAuthenticatedAtom } from "../../recoil/auth/atoms";
function AuthProvider({children}) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
  React.useEffect(()=>{
    checkLogin();
  },[])

  const checkLogin = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigate("/productos");
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigate("/login");
        }
      });
  }
  return children;
}

export default AuthProvider;
