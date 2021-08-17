import React, { useEffect, useState } from "react";
import "../styles/PhotoCard.scss";
import { BackgroundImage } from "react-image-and-background-image-fade";

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
      <BackgroundImage
        height="100%"
        width="100%"
        className="photoCard__bg"
        src={imageUrl}
        lazyLoad
        onClick={() => handlePhotoCardClick(index)}
      ></BackgroundImage>
    </div>
  );
}

export default PhotoCard;
