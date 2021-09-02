import React, { useState, useEffect } from "react";
import AddGalleryModal from "../components/AddGalleryModal";
import Card from "../components/Card";
import Modal from "../components/Modal";
import addIcon from "../images/add_icon_circle.svg";
import { environment } from "../environment";
import "../styles/Home.scss";

function Home() {
  const [isAddGalleryModalOpen, setIsAddGalleryModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    fetch(`${environment.apiUrl}/gallery`)
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

  const openGalleryModal = () => {
    setIsAddGalleryModalOpen(true);
  };

  return (
    <div className="home list">
      {categories.map((category) => {
        const { name, image, path } = category;
        return <Card key={path} name={name} image={image} path={path} />;
      })}

      <div className="addCategory" onClick={openGalleryModal}>
        <div className="addCategory__content">
          <img src={addIcon} alt="" />
          <p>Pridať kategóriu</p>
        </div>
      </div>

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
