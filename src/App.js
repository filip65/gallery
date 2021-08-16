import { useRef, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import AddGalleryModal from "./components/AddGalleryModal";
import Home from "./pages/Home";

import Modal from "./components/Modal";
import Subtitle from "./components/Subtitle";

function App() {
  const headerBg = useRef(null);

  return (
    <div className="App">
      {/* obsahuje meniaci sa background */}
      <div className="header" ref={headerBg}></div>
      <div className="wrapper">
        <h1 className="title">fotogaléria</h1>
        <Subtitle />
        {/* <h2 className="subtitle">{getText(location)}</h2> */}
        <Switch>
          <Route path="/" exact>
            <Home headerBg={headerBg} />
          </Route>

          <Route path="/gallery:path">
            {/* <h2>gallery</h2> */}
            {/* <Link to="/">chodme spat</Link> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
