import React, { useEffect, useState } from "react";
import nextIcon from "../images/next_icon.svg";
import prevIcon from "../images/prev_icon.svg";
import "../styles/PhotoCarousel.scss";

function PhotoCarousel({ images, index, setIndex }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getImageUrl = async () => {
      fetch(
        `http://api.programator.sk/images/700x0/${images[index].fullpath}`
      ).then((res) => setImageUrl(res.url));
    };

    getImageUrl();
  }, [index]);

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

  return (
    <div className="photoCarousel">
      <img src={imageUrl} alt="" />
      <svg
        className="prevIcon"
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
          class="cls-1"
          d="M408.157,552l2.856-2.82L401.736,540l9.277-9.18L408.157,528,396,540Z"
          transform="translate(-396 -528)"
        />
      </svg>{" "}
      <svg
        className="nextIcon"
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
          class="cls-1"
          d="M1193.77,528l-2.85,2.82,9.26,9.18-9.26,9.18,2.85,2.82,12.13-12Z"
          transform="translate(-1190.94 -528)"
        />
      </svg>
    </div>
  );
}

export default PhotoCarousel;
