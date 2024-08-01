import { Link } from "react-router-dom";
import "./css/ItemCard.css";
export const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <Link to={`/items/${item.item_id}`}>
        <img src={item.img_url}></img>
        <section>
          <h3>{item.item_name}</h3>
          <h4>{item.description}</h4>
          <p>{item.price}</p>
          <p>Listed by {item.listed_by}</p>
          <p>From {item.category_name}</p>
        </section>
      </Link>
    </div>
  );
};
