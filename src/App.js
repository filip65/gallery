import { useRef } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";

function App() {
  const location = useLocation();
  const headerBg = useRef(null);

  const getText = (location) => {
    switch (location.pathname) {
      case "/":
        return "kategórie";
      case "/gallery":
        return "nazov galerie";
      default:
        return "bad page...";
    }
  };

  return (
    <div className="App">
      <div className="header" ref={headerBg}></div>
      <div className="wrapper">
        <h1 className="title">fotogaléria</h1>
        <h2 className="subtitle">{getText(location)}</h2>
        <Switch>
          <Route path="/" exact>
            <Home headerBg={headerBg} />
          </Route>
          <Route path="/gallery:path">
            <h2>gallery</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
