import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Gallery({ setSubtitleText, setHeaderBgImagePath, headerBg }) {
  const { path } = useParams();
  const [gallery, setGallery] = useState({});

  const getImageUrl = async (fullpath) => {
    fetch(`http://api.programator.sk/images/300x0/${fullpath}`)
      .then((res) => {
        return res.url;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getGalleryInfo = async () => {
      fetch(`http://api.programator.sk/gallery/${path}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setGallery(data);
          setSubtitleText(data.gallery.name);
          if (data.images.length > 0) {
            setHeaderBgImagePath(data.images[0].fullpath);
          } else {
            // default obrazok ak galeria nema zatial ziaden obrazok
            headerBg.current.style.backgroundImage =
              "url(https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
          }
          console.log(data);
        });
    };

    getGalleryInfo();
  }, [path, setSubtitleText, setHeaderBgImagePath]);

  return <div className="gallery"></div>;
}

export default Gallery;
