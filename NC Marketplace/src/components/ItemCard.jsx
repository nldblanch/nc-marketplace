import { Link } from "react-router-dom";
import "./css/ItemCard.css";
export const ItemCard = ({ item }) => {
  return (
    <Link to={`/items/${item.item_id}`}>
      <div className="item-card">
        <img src={item.img_url}></img>
        <section>
          <h3>{item.item_name}</h3>
          <div>
          <p>{`£${String(item.price).slice(0, -2)}.${String(
          item.price
        ).slice(-2)}`}</p>
          <p>From <span>{item.category_name}</span> items</p>
          </div>
        </section>
      </div>
    </Link>
  );
};
