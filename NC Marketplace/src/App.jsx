import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { SellItemPage } from "./components/pages/SellItemPage";
import { ItemRouter } from "./routers/ItemRouter";
import { ShortcutsPage } from "./components/pages/ShortcutsPage";
import { Navbar } from "./components/Navbar";
import { BasketPage } from "./components/pages/BasketPage";
import { ListItemPage } from "./components/pages/ListItemPage";
import "./App.css";

function App() {
  return (
    <>
      <ItemRouter />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sell" element={<SellItemPage />} />
        <Route path="/sell/list" element={<ListItemPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/shortcuts" element={<ShortcutsPage />} />
        <Route path="/users/:username" element={<ShortcutsPage />}/>
        {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
