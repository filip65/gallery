import React, { useEffect, useState } from "react";
import "../styles/PhotoCard.scss";
import LazyLoad from "react-lazyload";

import getImageUrl from "../utils/getImageUrl";

function PhotoCard({ image, index, handlePhotoCardClick }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getImageUrl(image).then((url) => {
      setImageUrl(url);
    });
  }, [image]);

  return (
    <div className="photoCard">
      <LazyLoad offset={200}>
        <img
          src={imageUrl}
          alt=""
          className="photoCard__image"
          onClick={() => handlePhotoCardClick(index)}
        />
      </LazyLoad>
    </div>
  );
}

export default PhotoCard;
