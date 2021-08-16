import React, { useEffect, useState } from "react";

import { useLocation, Link } from "react-router-dom";

import backIcon from "../images/back_icon.png";

// const getText = (text, location) => {
//   if (text) {
//     return text;
//   } else if (location.pathname === "/") {
//     return "kategórie";
//   } else {
//     return "zla stranka";
//   }
// };

function Subtitle({ text, setSubtitleText }) {
  const location = useLocation();

  return (
    <>
      <h2 className="subtitle">
        {location.pathname !== "/" && (
          <Link to="/" onClick={() => setSubtitleText("kategórie")}>
            <img src={backIcon} alt="" />
          </Link>
        )}
        {text}
      </h2>
    </>
  );
}

export default Subtitle;
