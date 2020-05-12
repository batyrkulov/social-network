import React from 'react';
import './App.css';
import Navbar from "./cmps/Navbar/Navbar";
import Content from "./cmps/Content/Content";
import Footer from "./cmps/Footer/Footer";
import {HashRouter} from "react-router-dom";
import HeaderContainer from "./cmps/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initApp} from "./redux/app-reducer";
import Preloader from "./cmps/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
      this.props.initApp();
  }

  render() {
      if (this.props.inited) {
          return (
              <HashRouter>
                  <div className="App">
                      <HeaderContainer/>
                      <Navbar/>
                      <Content/>
                      <Footer/>
                  </div>
              </HashRouter>
          );
      } else {
          return <Preloader/>
      }
  }
}

let mapStateToProps = state=> ({
    inited: state.app.inited
});

export default compose(
    connect(mapStateToProps, {initApp})
)(App)
