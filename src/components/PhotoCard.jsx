import React, { useEffect, useState } from "react";
import "../styles/PhotoCard.scss";
import LazyLoad from "react-lazyload";

function PhotoCard({ fullpath, index, handlePhotoCardClick }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`http://api.programator.sk/images/300x0/${fullpath}`)
      .then((res) => {
        if (res.ok) {
          setImageUrl(res.url);
        } else {
          throw Error("nepodarilo sa nacitat obrazok");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fullpath]);

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
