import { useParams } from "react-router-dom";
import { getItemById } from "../../api";
import { useEffect, useState } from "react";
import "../css/ItemPage.css";

export const ItemPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState();
  const { item_id } = useParams();
  useEffect(() => {
    getItemById(item_id)
      .then((item) => {
        setItem(item);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (isLoading)
    return (
      <>
        <h2>loading</h2>
      </>
    );

  return (
    <main>
      <img src={item.img_url}></img>
      <section>
        <h3>{item.item_name}</h3>
        <p>{item.description}</p>
        <p id="category">From {item.category_name}</p>
        <p id="price">{`£${String(item.price).slice(0, -2)}.${String(
          item.price
        ).slice(-2)}`}</p>
        <p id="listing">Listed by {item.listed_by}</p>
      </section>
      <button>Buy Now</button>
      <button>Add To Basket</button>
    </main>
  );
};
