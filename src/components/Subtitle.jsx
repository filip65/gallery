import React from "react";

import { useLocation } from "react-router-dom";

const getText = (location) => {
  switch (location.pathname) {
    case "/":
      return "kategórie";
    case "/gallery":
      return "nazov galerie";
    default:
      return "bad page...";
  }
};

function Subtitle() {
  const location = useLocation();

  return <h2 className="subtitle">{getText(location)}</h2>;
}

export default Subtitle;
