import React, { useState, useEffect } from "react";
// import AddCategory from "../components/AddCategory";
import Card from "../components/Card";
import addIcon from "../images/add_icon_circle.png";
import "../styles/Home.scss";

function Home({ headerBg }) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    // try {
    //   const response = await fetch("http://api.programator.sk/gallery");
    //   const data = await response.json();
    //   setCategories(data.galleries);
    // } catch (error) {
    //   console.log(error);
    // }
    fetch("http://api.programator.sk/gallery")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data.galleries);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="addCategory">
        <img src={addIcon} alt="" />
        <p>Pridať kategóriu</p>
      </div>

      {/* <AddCategory /> */}
    </div>
  );
}

export default Home;
