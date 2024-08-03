import { postItem } from "../../api"

export const ListItemPage = () => {
  
  const listItem = (event) => {
    event.preventDefault()
    const item_name = event.target[0].value
    const description = event.target[1].value
    const img_url = event.target[2].value
    const price = event.target[3].value.split(".").join("")
    const category_name = event.target[4].value
    postItem({item: {item_name, description, img_url, price, category_name, listed_by: 17}})
    .then((item) => {
      console.log(item)
    })
  }
  
  return (
    <>
        <h1>LIST ITEM PAGE</h1>
        <form onSubmit={listItem}>
        <label htmlFor="item-name">Name <span>*</span></label>
        <input id="item-name" name="item-name" type="text" required></input>

        <label htmlFor="item-description">Description</label>
        <input id="item-description" name="item-description" type="text"></input>

        <label htmlFor="item-img-url">Image <span>*</span></label>
        <input id="item-img-url" name="item-img-url" type="url" required></input>

        <label htmlFor="item-price">Price <span>*</span></label>
        <input id="item-price" name="item-price" type="number" min="0.00" max="10000.00" step="0.01" required></input>
        
        <label htmlFor="item-category">Category</label>
        <input id="item-category" name="item-category" type="text"></input>

        <button type="submit">List Item</button>
        </form>
    </>
  )
}