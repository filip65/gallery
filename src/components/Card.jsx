import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
import LazyLoad from "react-lazyload";
import { environment } from "../environment";
import getImageUrl from "../utils/getImageUrl";
import { useGetHeaderBg } from "../headerContext";

function Card({ image, name, path }) {
  const [imageUrl, setImageURL] = useState("");
  const [numberOfImages, setNumberOfImages] = useState(0);

  const { changeHeaderBg } = useGetHeaderBg();

  useEffect(() => {
    getImageUrl(image).then((url) => {
      setImageURL(url);
    });
  }, [image]);

  // zobrazenie postu fotiak v galerii
  useEffect(() => {
    fetch(`${environment.apiUrl}/gallery/${path}`)
      .then((res) => res.json())
      .then((data) => {
        const amount = data.images.length;
        setNumberOfImages(amount);
      });
  }, [path]);

  return (
    <Link
      to={`/gallery/${path}`}
      className="card"
      onMouseEnter={() => changeHeaderBg(imageUrl)}
    >
      <div className="background-image-container">
        <LazyLoad offset={200}>
          <img src={imageUrl} alt="" className="image" />
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
