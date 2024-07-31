import { Link } from "react-router-dom"

export const SellItemPage = () => {
    return (
        <>
            <h1>SELL ITEM PAGE</h1>
            <Link to="/sell/list">
            <button>List an item</button>
            </Link>
        </>
      )
}