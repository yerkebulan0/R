import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./header/header.js";
import Block from "./block/block";
import Footer from "./footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Block />
      <Footer/>
    </div>
  );
}

export default App;
