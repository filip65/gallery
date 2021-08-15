import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import addIcon from "../images/add_icon_circle.png";
import "../styles/Home.scss";

function Home({
  categories,
  getCategories,
  headerBg,
  setIsAddGalleryModalOpen,
}) {
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
