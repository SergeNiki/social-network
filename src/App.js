import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Navbar/Nav";
import Content from "./components/Content/Content";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { useEffect } from "react";
import Preloader from "./components/common/Preloader/Preloader";

function App(props) {

  useEffect(() => {
    props.initializeApp()
  }, [])

  if (!props.initialized) {
    return <Preloader/>
  } 

  return (
    <div className="app-wrapper">
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <HeaderContainer />
        <Nav />
        <Content />
      </BrowserRouter>
    </div>
  );
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
