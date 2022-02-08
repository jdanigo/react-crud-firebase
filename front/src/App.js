import logo from "./logo.svg";
import "./App.css";
import { useRoutes, Navigate } from "react-router-dom";
import Productos from "./screens/productos";
import Login from "./screens/login";
import DefaultLayout from "./layouts/DefaultLayout";

import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyDRYckZsQ4RFgl62LLcAsi0bLcZryYueOg",
  authDomain: "react-crud-firebase-a9024.firebaseapp.com",
  databaseURL: "https://react-crud-firebase-a9024-default-rtdb.firebaseio.com",
  projectId: "react-crud-firebase-a9024",
  storageBucket: "react-crud-firebase-a9024.appspot.com",
  messagingSenderId: "358793711623",
  appId: "1:358793711623:web:b83abae491a78868721aa2"
};


// firebase.initializeApp(config);

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          alert("Solo puede tener una pestaña abierta, por favor cierre las demás pestañas");
      } else if (err.code == 'unimplemented') {
          alert("Su navegador web no soporta las funciones de esta app, por favor le recomendamos usar Google Chrome o Firefox");
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

function App() {
  const mainRoutes = {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Navigate to="/productos" />},
      { path: "/productos", element: <Productos />}
    ],
  };

  const loginRoutes = {
    path: "/login",
    element: <Login />,
  };

  const routing = useRoutes([mainRoutes, loginRoutes]);
  return <>{routing}</>;
}

export default App;
