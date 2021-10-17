import { Fragment } from "react";
import "./App.css";
//import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

//import SideBarWrapper from "./components/SideBarWrapper";

function App() {
  return (
    <Fragment>
      <Navbar />
      <LoginForm />
    </Fragment>
  );
}

export default App;
