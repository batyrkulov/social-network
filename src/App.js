import React from 'react';
import './App.css';
import Navbar from "./cmps/Navbar/Navbar";
import Content from "./cmps/Content/Content";
import Footer from "./cmps/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./cmps/Header/HeaderContainer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <HeaderContainer />
              <Navbar />
              <Content />
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
