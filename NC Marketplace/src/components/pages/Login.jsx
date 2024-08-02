import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { Link } from "react-router-dom";
import "../css/Login.css"
export const Login = () => {
  const [username, setUsername] = useState("");
  const { setLoggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const login = (event) => {
    event.preventDefault();

    setLoggedInUser(username);
  };

  return (
    <>
      <h1>Login</h1>
      <h2>Welcome back!</h2>
      <form onSubmit={login}>
        <label htmlFor="username">Username <span>*</span></label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="password">Password <span>*</span></label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          required
        ></input>
        <button type="submit">Login</button>
      </form>

      <h3>New to us?</h3>
      <Link to="/users/signup">
        <button>Sign up</button>
      </Link>
    </>
  );
};
