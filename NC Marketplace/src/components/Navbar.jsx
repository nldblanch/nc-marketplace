import { Link } from "react-router-dom"
import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Navbar = () => {
  return (
    
    <nav>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/items/1">Item</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/shortcuts">Shortcuts</Link>        
    </nav>
  )
  const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}

