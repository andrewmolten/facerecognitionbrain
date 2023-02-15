import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";
import "tachyons";
import ParticlesBg from "particles-bg";

let config = {
  color: ["random", "#ff0000"],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <div>...</div>
          <ParticlesBg config={config} type="cobweb" bg={true} />
        </>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
