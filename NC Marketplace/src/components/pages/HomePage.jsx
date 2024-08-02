import { useEffect, useState } from "react";
import "../css/HomePage.css";
import { Search } from "../Search";
import { getItems } from "../../api";
export const HomePage = () => {
  const [featureItems, setFeatureItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getItems().then((items) => {
      
      setFeatureItems(
        items.slice(10, 13).map((item) => {          
          return item.img_url;
        })
      );
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <header>
        <h1>Home</h1>
        <Search />
        <ul id="categories-container">
          <li>cat 1</li>
          <li>cat 2</li>
          <li>cat 3</li>
          <li>cat 4</li>
          <li>cat 5</li>
        </ul>
      </header>
      <main id="home-page">
        <div id="front-image-container"><img src="../../../public/stockPhoto.jpg"></img></div>
        <h2>Top picks</h2>
          <ul id="items-gallery">
            {featureItems.map((url, index) => {
              return <li key={index} className="item-container"><img className="item" src={url}></img></li>
            })}
          </ul>
      </main>
    </>
  );
};
