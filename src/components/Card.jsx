import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";

import LazyLoad from "react-lazyload";

function Card({ image, name, path, setHeaderBgImagePath }) {
  const [imageURL, setImageURL] = useState("");
  const [numberOfImages, setNumberOfImages] = useState(0);

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

  // zobrazenie postu fotiak v galerii
  useEffect(() => {
    fetch(`http://api.programator.sk/gallery/${path}`)
      .then((res) => res.json())
      .then((data) => {
        const amount = data.images.length;
        setNumberOfImages(amount);
      });
  }, [path]);

  const changeBg = () => {
    if (image) {
      setHeaderBgImagePath(image.fullpath);
    } else {
      setHeaderBgImagePath(null);
    }
  };

  return (
    <Link to={`/gallery/${path}`} className="card" onMouseEnter={changeBg}>
      <div className="background-image-container">
        <LazyLoad offset={200}>
          <img src={imageURL} alt="" className="image" />
        </LazyLoad>
      </div>

      <div className="text">
        <h3 className="name">{name}</h3>
        <p className="numberOfPhotos">
          {numberOfImages === 1 ? "1 fotka" : `${numberOfImages} fotiek`}
        </p>
      </div>
    </Link>
  );
}

export default Card;
