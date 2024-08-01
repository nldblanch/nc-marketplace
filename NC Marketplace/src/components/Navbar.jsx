import { Link as RouterLink } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";
import "./css/Navbar.css";
export const Navbar = () => {
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
      <BottomNavigation
        id="nav-bar"
        showLabels
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          className="nav-element"
          component={RouterLink}
          to="/"
          label="Home"
          value="home"
          icon={<RestoreIcon className="nav-icon" />}
        />
        <BottomNavigationAction
          className="nav-element"
          component={RouterLink}
          to="/profile"
          label="Profile"
          value="profile"
          icon={<AccountCircleIcon className="nav-icon" />}
        />

        <BottomNavigationAction
          className="nav-element"
          component={RouterLink}
          to="/sell"
          label="Selling"
          value="selling"
          icon={<LocalOfferIcon className="nav-icon" />}
        />
        <BottomNavigationAction
          className="nav-element"
          component={RouterLink}
          to="/basket"
          label="Basket"
          value="basket"
          icon={<ShoppingBasketIcon className="nav-icon" />}
        />
        <BottomNavigationAction
          className="nav-element"
          component={RouterLink}
          to="/shortcuts"
          label="Shortcuts"
          value="shortcuts"
          icon={<DensityMediumIcon className="nav-icon" />}
        />
      </BottomNavigation>
    </>
  );
};
