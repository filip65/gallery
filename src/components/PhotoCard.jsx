import React, { useEffect, useState } from "react";
import "../styles/PhotoCard.scss";

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
    <div
      className="photoCard"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => handlePhotoCardClick(index)}
    ></div>
  );
}

export default PhotoCard;
