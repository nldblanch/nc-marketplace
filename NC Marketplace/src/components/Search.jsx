import { useState } from "react"
import "./css/Search.css"
export const Search = () => {
    const [search, setSearch] = useState("")
    return (
    <>
        <form id="searchbar">
            <input type="text" placeholder="hello"></input>
        </form>
    </>
  )
}