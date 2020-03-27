import React from 'react';
import './App.css';
import Header from "./cmps/Header/Header";
import Navbar from "./cmps/Navbar/Navbar";
import Content from "./cmps/Content/Content";
import Footer from "./cmps/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Navbar />
              <Content state={props.state} addPost={props.addPost}  updateNewPost={props.updateNewPost}/>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
