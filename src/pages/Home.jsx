import React, { useState, useEffect } from "react";
import AddGalleryModal from "../components/AddGalleryModal";
import Card from "../components/Card";
import Modal from "../components/Modal";
import addIcon from "../images/add_icon_circle.svg";
import "../styles/Home.scss";

function Home({ headerBgImagePath, setHeaderBgImagePath }) {
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
        console.log(error.message);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories[0]) {
      setHeaderBgImagePath(categories[0].image?.fullpath);
    }
  }, [categories, setHeaderBgImagePath]);

  const openGalleryModal = () => {
    setIsAddGalleryModalOpen(true);
  };

  return (
    <div className="home list">
      {/* tu sa mapnu kategorie potom */}
      {categories.map((category) => {
        const { name, image, path } = category;
        return (
          <Card
            key={path}
            name={name}
            image={image}
            setHeaderBgImagePath={setHeaderBgImagePath}
            path={path}
          />
        );
      })}

      <div className="addCategory" onClick={openGalleryModal}>
        <img src={addIcon} alt="" />
        <p>Pridať kategóriu</p>
      </div>

      {/* {isAddGalleryModalOpen && (
        <Modal setIsOpen={setIsAddGalleryModalOpen}>
          <AddGalleryModal
            setIsAddGalleryModalOpen={setIsAddGalleryModalOpen}
            getCategories={getCategories}
          />
        </Modal>
      )} */}

      <Modal
        setIsOpen={setIsAddGalleryModalOpen}
        isOpen={isAddGalleryModalOpen}
      >
        <AddGalleryModal
          setIsAddGalleryModalOpen={setIsAddGalleryModalOpen}
          getCategories={getCategories}
        />
      </Modal>
    </div>
  );
}

export default Home;
