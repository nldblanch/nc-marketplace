import { useEffect, useState } from "react";
import "../css/HomePage.css";
import { Search } from "../Search";
import { getItems } from "../../api";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [featureItems, setFeatureItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getItems().then((items) => {
      setFeatureItems(
        items.slice(0, 3).map((item) => {
          return item;
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
          {/* <li key={"100"}>cat 1</li>
          <li key={"200"}>cat 2</li>
          <li key={"300"}>cat 3</li>
          <li key={"400"}>cat 4</li>
          <li key={"500"}>cat 5</li> */}
        </ul>
      </header>
      <main id="home-page">
        <div id="front-image-container">
          <img src="/stockPhoto.jpg"></img>
        </div>
        <h2>Top picks</h2>
        <ul id="items-gallery">
          {featureItems.map((item) => {
            console.log(item);
            return (
              <Link to={`/items/${item.item_id}`} className="item-container">
                <li key={item.item_id}>
                  <img className="item" src={item.img_url}></img>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
};
