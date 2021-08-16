import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";

function Card({ image, name, headerBg, path, setHeaderBgImagePath }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
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

    getImage();
  }, [image]);

  const changeBg = () => {
    if (image) {
      setHeaderBgImagePath(image.fullpath);
    } else {
      setHeaderBgImagePath(null);
    }
  };

  return (
    <Link to={`/gallery/${path}`} className="card" onMouseEnter={changeBg}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="text">
        <h3 className="name">{name}</h3>
      </div>
    </Link>
  );
}

export default Card;
