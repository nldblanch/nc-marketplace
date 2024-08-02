import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./css/Search.css"
export const Search = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        setSearch(event.target.value)
        navigate(`/items?search=${event.target.value}`)
      }
    }
    return (
    <>
        <form id="searchbar" onKeyDown={handleKeyDown}>
            <input type="text" name="search" placeholder="Search"></input>
        </form>
    </>
  )
}