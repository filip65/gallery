import React, { useEffect, useState } from "react";
import { environment } from "../environment";
import "../styles/PhotoCarousel.scss";
import DeleteBtn from "./DeleteBtn";
import getImageUrl from "../utils/getImageUrl";

function PhotoCarousel({
  images,
  index,
  setIndex,
  setIsCarouseOpen,
  getGalleryInfo,
}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getImageUrl(images[index]).then((url) => setImageUrl(url));
  }, [index, images]);

  const nextImage = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((oldIndex) => oldIndex + 1);
    }
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((oldIndex) => oldIndex - 1);
    }
  };

  const deleteImage = async () => {
    fetch(`${environment.apiUrl}/gallery/${images[index].fullpath}`, {
      method: "delete",
    }).then(() => {
      setIsCarouseOpen(false);
      getGalleryInfo();
    });
  };

  return (
    <div className="photoCarousel">
      <img src={imageUrl} alt="" />
      <button className="prevIcon">
        <svg
          onClick={prevImage}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="24"
          viewBox="0 0 15 24"
        >
          <defs></defs>
          <path
            id="prev_icon"
            data-name="prev icon"
            d="M408.157,552l2.856-2.82L401.736,540l9.277-9.18L408.157,528,396,540Z"
            transform="translate(-396 -528)"
          />
        </svg>
      </button>
      <button className="nextIcon">
        <svg
          onClick={nextImage}
          xmlns="http://www.w3.org/2000/svg"
          width="14.97"
          height="24"
          viewBox="0 0 14.97 24"
        >
          <defs></defs>
          <path
            id="next_icon"
            data-name="next icon"
            d="M1193.77,528l-2.85,2.82,9.26,9.18-9.26,9.18,2.85,2.82,12.13-12Z"
            transform="translate(-1190.94 -528)"
          />
        </svg>
      </button>
      <DeleteBtn onClick={deleteImage} />
    </div>
  );
}

export default PhotoCarousel;
