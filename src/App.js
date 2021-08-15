import { useRef, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./App.scss";
import AddGalleryModal from "./components/AddGalleryModal";
import Home from "./pages/Home";

import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const headerBg = useRef(null);

  const [isAddGalleryModalOpen, setIsAddGalleryModalOpen] = useState(false);

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
      {/* obsahuje meniaci sa background */}
      <div className="header" ref={headerBg}></div>
      <div className="wrapper">
        <h1 className="title">fotogaléria</h1>
        <h2 className="subtitle">{getText(location)}</h2>
        <Switch>
          <Route path="/" exact>
            <Home
              headerBg={headerBg}
              setIsAddGalleryModalOpen={setIsAddGalleryModalOpen}
            />
          </Route>
          <Route path="/gallery:path">
            <h2>gallery</h2>
          </Route>
        </Switch>
      </div>

      {/* {isAddGalleryModalOpen && (
        <AddGalleryModal setIsAddGalleryModalOpen={setIsAddGalleryModalOpen} />
      )} */}

      {isAddGalleryModalOpen && (
        <Modal setIsOpen={setIsAddGalleryModalOpen}>
          <AddGalleryModal
            setIsAddGalleryModalOpen={setIsAddGalleryModalOpen}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
