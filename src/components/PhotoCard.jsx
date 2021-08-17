import React, { useEffect, useState } from "react";
import "../styles/PhotoCard.scss";
import { BackgroundImage } from "react-image-and-background-image-fade";

function PhotoCard({ fullpath, index, handlePhotoCardClick }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`http://api.programator.sk/images/300x0/${fullpath}`)
      .then((res) => {
        // console.log(res);
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
    <BackgroundImage
      className="photoCard"
      // style={{ backgroundImage: `url(${imageUrl})` }}
      src={imageUrl}
      lazyLoad
      onClick={() => handlePhotoCardClick(index)}
    ></BackgroundImage>
  );
}

export default PhotoCard;
