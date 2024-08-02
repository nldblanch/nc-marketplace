import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { postNewUser } from "../../api";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  const { setLoggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const signup = (event) => {
    event.preventDefault();
    postNewUser(username)
    .then(() => {
      setLoggedInUser(username);
      navigate("/profile")
    })
  };

  return (
    <>
      <h1>Signup</h1>
      <h2>Create your account</h2>
      <form onSubmit={signup}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="email">Username</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          required
        ></input>
        <label htmlFor="password">Email</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          required
        ></input>
        <label htmlFor="confirm-password">Confirm Your Password</label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="confirm password"
          required
        ></input>
        <button type="submit">Signup</button>
      </form>

      <h3 id="existing-user-login-label">Already got an account?</h3>
      <Link to="/profile">
        <button>Login</button>
      </Link>
    </>
  );
};
