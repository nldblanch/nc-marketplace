import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://fe-nc-marketplace-api-2.onrender.com/api",
    timeout: 1000,
  });


export const getItems = (searchTerm) => {
    return apiClient.get(`/items?search=${searchTerm}`)
    .then(({data}) => {
      return data.items
    })
    .catch((error) => {
      console.log(error, "error!")
    });
  
}

export const getItemById = (id) => {
    return apiClient.get(`/items/${id}`)
    .then(({data}) => {
    
      return data.item
    })
    .catch((error) => {
        console.log(error, "error!")
      });
}
