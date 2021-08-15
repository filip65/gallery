import React from "react";
import AddIcon from "../images/add_icon.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../styles/AddGalleryModal.scss";

const schema = yup.object().shape({
  name: yup.string().required("Meno nesmie byť prázdne!"),
});

function AddGalleryModal({ setIsAddGalleryModalOpen, getCategories }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setIsAddGalleryModalOpen(false);
    document.body.style.overflow = "visible";
  };

  const onSubmit = (data) => {
    if (data.name.includes("/")) {
      setError("name", {
        type: "manual",
        message: "Meno nesmie obsahovať znak /",
      });
      return;
    }

    fetch("http://api.programator.sk/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        closeModal();
        getCategories();
        // window.location.reload();
      } else if (res.status === 409) {
        setError("name", {
          type: "manual",
          message: "Galéria s daním menom už existuje.",
        });
      } else {
        console.log(res.statusText);
      }
    });
  };

  return (
    <div className="addGalleryModal">
      <h3>pridať kategóriu</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="zadajte názov kategórie"
          {...register("name")}
        />
        <button type="submit">
          <img src={AddIcon} alt="Add icon" /> pridať
        </button>
      </form>
      <p className="errorMessage">{errors.name?.message}</p>
    </div>
  );
}

export default AddGalleryModal;
