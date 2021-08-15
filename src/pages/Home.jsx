import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import addIcon from "../images/add_icon_circle.png";
import "../styles/Home.scss";

function Home({ headerBg, setIsAddGalleryModalOpen }) {
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

  useEffect(() => {
    getCategories();
  }, []);

  const openGalleryModal = () => {
    setIsAddGalleryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="home list">
      {/* tu sa mapnu kategorie potom */}
      {categories.map((category) => {
        const { name, image, path } = category;
        return (
          <Card key={path} name={name} image={image} headerBg={headerBg} />
        );
      })}
      <div className="addCategory" onClick={openGalleryModal}>
        <img src={addIcon} alt="" />
        <p>Pridať kategóriu</p>
      </div>
    </div>
  );
}

export default Home;
