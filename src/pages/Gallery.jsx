import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PhotoCard from "../components/PhotoCard";
import PhotoCarousel from "../components/PhotoCarousel";
import Modal from "../components/Modal";

import "../styles/Gallery.scss";
import AddPhotosModal from "../components/AddPhotosModal";

function Gallery({ setSubtitleText, setHeaderBgImagePath, headerBg }) {
  const { path } = useParams();
  const [gallery, setGallery] = useState({});
  const [isCarouselOpen, setIsCarouseOpen] = useState(false);
  const [isAddPhotosModalOpen, setIsAddPhotosModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // const getGalleryInfo = async () => {
  //   fetch(`http://api.programator.sk/gallery/${path}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setGallery(data);
  //       setSubtitleText(data.gallery.name);
  //       if (data.images.length > 0) {
  //         setHeaderBgImagePath(data.images[0].fullpath);
  //       } else {
  //         // default obrazok ak galeria nema zatial ziaden obrazok
  //         headerBg.current.style.backgroundImage =
  //           "url(https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
  //       }
  //     });
  // };

  const getGalleryInfo = useCallback(async () => {
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
      });
  }, [path, setHeaderBgImagePath, headerBg, setSubtitleText]);

  useEffect(() => {
    getGalleryInfo();
  }, [getGalleryInfo]);

  const handlePhotoCardClick = (index) => {
    setIsCarouseOpen(true);
    setPhotoIndex(index);
  };

  return (
    <div className="gallery list">
      {gallery.images &&
        gallery.images.map((image, index) => {
          return (
            <PhotoCard
              key={image.path}
              fullpath={image.fullpath}
              index={index}
              handlePhotoCardClick={handlePhotoCardClick}
            />
          );
        })}

      <div className="addPhotos" onClick={() => setIsAddPhotosModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="42"
          viewBox="0 0 46 42"
        >
          <defs></defs>
          <path
            id="Shape_6_copy_2"
            data-name="Shape 6 copy 2"
            d="M784,487v-6h4v6h6v4h-6v6h-4v-6h-6v-4h6Zm6,12v-6h6v-6h14l3.66,4H820a4.012,4.012,0,0,1,4,4v24a4.012,4.012,0,0,1-4,4H788a4.012,4.012,0,0,1-4-4V499h6Zm14,18a10,10,0,1,0-10-10A10,10,0,0,0,804,517Zm-6.4-10a6.4,6.4,0,1,0,6.4-6.4A6.393,6.393,0,0,0,797.6,507Z"
            transform="translate(-778 -481)"
          />
        </svg>
        <p>pridať fotky</p>
      </div>

      {isCarouselOpen && (
        <Modal setIsOpen={setIsCarouseOpen}>
          <PhotoCarousel
            images={gallery.images}
            index={photoIndex}
            setIndex={setPhotoIndex}
          />
        </Modal>
      )}

      {isAddPhotosModalOpen && (
        <Modal setIsOpen={setIsAddPhotosModalOpen}>
          <AddPhotosModal
            path={path}
            getGalleryInfo={getGalleryInfo}
            setIsAddPhotosModalOpen={setIsAddPhotosModalOpen}
          />
        </Modal>
      )}
    </div>
  );
}

export default Gallery;
