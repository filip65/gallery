import { useRef, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Subtitle from "./components/Subtitle";
import Gallery from "./pages/Gallery";

function App() {
  const headerBg = useRef(null);
  const [headerBgImagePath, setHeaderBgImagePath] = useState("");
  const [subtitleText, setSubtitleText] = useState("kategórie");

  useEffect(() => {
    const changeHeaderBgImage = async () => {
      if (headerBgImagePath !== null) {
        fetch(
          `http://api.programator.sk/images/300x0/${headerBgImagePath}`
        ).then((res) => {
          headerBg.current.style.background = `url(${res.url})`;
        });
      } else {
        headerBg.current.style.background = "#696969";
      }
    };
    changeHeaderBgImage();
  }, [headerBgImagePath]);

  return (
    <div className="App">
      {/* obsahuje meniaci sa background */}
      <div className="header" ref={headerBg}></div>
      <div className="wrapper">
        <h1 className="title">fotogaléria</h1>
        <Subtitle text={subtitleText} setSubtitleText={setSubtitleText} />
        {/* <h2 className="subtitle">{getText(location)}</h2> */}
        <Switch>
          <Route path="/" exact>
            <Home
              headerBgImagePath
              setHeaderBgImagePath={setHeaderBgImagePath}
            />
          </Route>

          <Route path="/gallery/:path">
            <Gallery
              setSubtitleText={setSubtitleText}
              setHeaderBgImagePath={setHeaderBgImagePath}
              headerBg={headerBg}
            />
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
