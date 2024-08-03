import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fe-nc-marketplace-api-2.onrender.com/api",
  timeout: 1000,
});

export const getItems = (searchTerm) => {
  return apiClient
    .get(`/items`, { params: { search: searchTerm } })
    .then(({ data }) => {
      return data.items;
    })
    .catch((error) => {
      console.log(error, "error!");
    });
};

export const getItemById = (id) => {
  return apiClient
    .get(`/items/${id}`)
    .then(({ data }) => {
      return data.item;
    })
    .catch((error) => {
      console.log(error, "error!");
    });
};

export const getUsers = () => {
  return apiClient
  .get("/users")
  .then(({data}) => {
    return data.users
  })
}

export const getUserByUsername = (username) => {
  return apiClient
  .get(`/users/${username}`)
  .then(({data}) => {
    return data.user
  })
}

export const postNewUser = (username) => {
  return apiClient
  .post(`/users`, {username})
  .then(({data}) => {
    return data.user
  })
}

export const patchUser = (loggedInUser, {avatar_url, username, kudos_inc}) => {
  return apiClient
  .patch(`/users/${loggedInUser}`, {avatar_url, username})
  .then(({data}) => {
    return data.user
  })
}
export const postItem = ({item}) => {
  return apiClient
  .post(`/items`, item)
  .then(({data}) => {
    return data.item
  })
  .catch((err) => {
    console.log(err)
  })
}