import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems } from "../../api";
import { ItemCard } from "../ItemCard";

export const BrowseItemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const searchTerm = searchParams.get("search"); 
  useEffect(() => {
    getItems(searchTerm)
    .then((items) => {
      setSearchResults(items)
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  if (isLoading) return <>
    <h1>BROWSE ITEMS PAGE</h1>
    <h2>loading</h2>
    </>
  return (
      <>
          <h1>BROWSE ITEMS PAGE</h1>
          {
            searchResults.map((item) => {
              return <ItemCard key={item.item_id} item={item} />
            })
          }
      </>
    )
  }