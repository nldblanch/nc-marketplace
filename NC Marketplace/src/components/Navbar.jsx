import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/items/1">Item</Link>
    </nav>
  )
}