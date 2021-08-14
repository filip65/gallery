import React, { useState, useEffect } from "react";
import Card from "../components/Card";

import "../styles/Home.scss";

function Home({ headerBg }) {
  const [categories, setCategories] = useState([]);

  console.log(headerBg);

  const getCategories = async () => {
    try {
      const response = await fetch("http://api.programator.sk/gallery");
      const data = await response.json();
      setCategories(data.galleries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home list">
      {/* tu sa mapnu kategorie potom */}
      {categories.map((category) => {
        const { name, image, path } = category;
        return (
          <Card key={path} name={name} image={image} headerBg={headerBg} />
        );
      })}
    </div>
  );
}

export default Home;
