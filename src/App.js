import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Subtitle from "./components/Subtitle";
import Gallery from "./pages/Gallery";
import { useGetHeaderBg } from "./headerContext";

function App() {
  const [subtitleText, setSubtitleText] = useState("kategórie");
  const { headerBg } = useGetHeaderBg();

  return (
    <div className="App">
      <div className="header" style={{ background: headerBg }}></div>
      <div className="wrapper">
        <h1 className="title">fotogaléria</h1>
        <Subtitle text={subtitleText} setSubtitleText={setSubtitleText} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/gallery/:path">
            <Gallery setSubtitleText={setSubtitleText} />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <p className="bart">webdesign bart.sk</p>
      </div>
    </div>
  );
}

export default App;
