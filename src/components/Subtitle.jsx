import React from "react";
import { useLocation, Link } from "react-router-dom";
import backIcon from "../images/back_icon.svg";

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
