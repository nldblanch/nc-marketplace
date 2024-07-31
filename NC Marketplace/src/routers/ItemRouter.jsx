import { Route, Routes } from "react-router-dom"

import { ItemPage } from "../components/pages/ItemPage"
import { BrowseItemsPage } from "../components/pages/BrowseItemPage"

export const ItemRouter = () => {
  return (
    <Routes>
        <Route path="/items" element={<BrowseItemsPage />} />
        <Route path="/items/:item_id" element={<ItemPage />} />

    </Routes>
  )
}
