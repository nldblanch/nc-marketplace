
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/HomePage'
import {ProfilePage} from "./components/ProfilePage"
import {SellItemPage} from "./components/SellItemPage"
import {ItemRouter} from "./routers/ItemRouter"

import { Navbar } from './components/Navbar'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sell" element={<SellItemPage />} />
      </Routes>
        <ItemRouter />
        
      <Navbar />
    </>
  )
}

export default App
