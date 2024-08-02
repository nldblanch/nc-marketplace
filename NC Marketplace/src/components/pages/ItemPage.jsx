import { Link, useParams } from "react-router-dom";
import { getItemById, getUsers } from "../../api";
import { useEffect, useState } from "react";
import "../css/ItemPage.css";

export const ItemPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState();
  const [user, setUser] = useState();
  const { item_id } = useParams();
  useEffect(() => {
    setIsLoading(true);

    getItemById(item_id)
      .then((item) => {
        setItem(item);
        getUsers().then((users) => {
          setUser(
            users.filter((user) => {
              return user.user_id === item.listed_by;
            })[0]
          );
          setIsLoading(false);
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return isLoading ? (
    <>
      <h2>loading</h2>
    </>
  ) : (
    <main id="item-page">
      <img src={item.img_url}></img>
      <section>
        <h3>{item.item_name}</h3>
        <p>{item.description}</p>
        <p id="category">From {item.category_name}</p>
        <p id="price">{`£${String(item.price).slice(0, -2)}.${String(
          item.price
        ).slice(-2)}`}</p>
        <p id="listing">
          Listed by <Link id="profile-link" to={`/users/${user.username}`}>{user.username}</Link>
        </p>
      </section>
      <button>Buy Now</button>
      <button>Add To Basket</button>
    </main>
  );
};
