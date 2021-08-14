import React, { useState, useEffect } from "react";

import "../styles/Card.scss";

function Card({ image, name, headerBg }) {
  const [imageURL, setImageURL] = useState("");

  const getImage = async () => {
    if (image) {
      const response = await fetch(
        `http://api.programator.sk/images/300x0/${image.fullpath}`
      );
      setImageURL(response.url);
    } else {
      setImageURL(
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png"
      );
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  const changeBg = () => {
    headerBg.current.style.backgroundImage = `url(${imageURL})`;
  };

  return (
    <div className="card" onMouseEnter={changeBg}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="text">
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
}

export default Card;
