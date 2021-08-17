import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import "../styles/AddPhotosModal.scss";

function AddPhotosModal({ path, getGalleryInfo, setIsAddPhotosModalOpen }) {
  const [files, setFiles] = useState([]);
  const sendBtn = useRef(null);
  const [sendBtnText, setSendBtnText] = useState("pridať");
  let numberOfSendPhotos = 0;

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles((oldFiles) => {
        return [...oldFiles, ...acceptedFiles];
      });
      //   console.log(acceptedFiles);
      // odoslavnie suborov
      //   const formData = new FormData();
      //   acceptedFiles.map((file) => {
      //     formData.append("image", file);
      //     fetch(`http://api.programator.sk/gallery/${path}`, {
      //       method: "POST",
      //       body: formData,
      //     }).then((res) => {
      //       getGalleryInfo();
      //       setIsAddPhotosModalOpen(false);
      //     });
      //   });
      //   setFiles(
      //     acceptedFiles.map((file) =>
      //       Object.assign(file, { preview: URL.createObjectURL(file) })
      //     )
      //   );
    },
  });

  const sendPhotos = async () => {
    setSendBtnText("fotky sa odosielajú");
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("image", file);
      fetch(`http://api.programator.sk/gallery/${path}`, {
        method: "POST",
        body: formData,
      }).then((res) => {
        console.log(res);
        numberOfSendPhotos++;

        //ak sa uz vsetky fotky nahrali
        if (numberOfSendPhotos === files.length) {
          getGalleryInfo();
          setSendBtnText("Fotky úspešne odoslane");
          sendBtn.current.classList.add("done");

          setTimeout(() => {
            setIsAddPhotosModalOpen(false);
          }, 1500);
        }
      });
    });
  };

  useEffect(() => {}, [numberOfSendPhotos]);

  return (
    <div className="addPhotosModal">
      <h2>pridat fotky</h2>
      <div {...getRootProps()} className="dropZoneArea">
        <input {...getInputProps()} />
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
        <h3>sem presunte fotky</h3>
        <p className="or">alebo</p>
        <p className="choose">vyberte súbory</p>
        {files.length > 0 &&
          (files.length === 1 ? (
            <p>1 fotka vybrata</p>
          ) : (
            <p>{files.length} fotiek vybratých</p>
          ))}
      </div>
      <button onClick={sendPhotos} ref={sendBtn}>
        {sendBtnText}
      </button>
    </div>
  );
}

export default AddPhotosModal;
