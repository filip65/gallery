import { useRef, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import AddGalleryModal from "./components/AddGalleryModal";
import Home from "./pages/Home";

import Modal from "./components/Modal";
import Subtitle from "./components/Subtitle";

function App() {
  const headerBg = useRef(null);
  const [isAddGalleryModalOpen, setIsAddGalleryModalOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    fetch("http://api.programator.sk/gallery")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data.galleries);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <Home
              categories={categories}
              getCategories={getCategories}
              headerBg={headerBg}
              setIsAddGalleryModalOpen={setIsAddGalleryModalOpen}
            />
          </Route>
          <Route path="/gallery:path">
            {/* <h2>gallery</h2> */}
            {/* <Link to="/">chodme spat</Link> */}
          </Route>
        </Switch>
      </div>

      {isAddGalleryModalOpen && (
        <Modal setIsOpen={setIsAddGalleryModalOpen}>
          <AddGalleryModal
            setIsAddGalleryModalOpen={setIsAddGalleryModalOpen}
            getCategories={getCategories}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
