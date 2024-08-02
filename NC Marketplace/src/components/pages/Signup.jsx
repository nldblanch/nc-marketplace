import { Link } from "react-router-dom";

export const Signup = () => {
  const signup = (event) => {
    event.preventDefault();
    setLoggedInUser(username);
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

      <h3>Already got an account?</h3>
      <Link to="/profile">
        <button>Login</button>
      </Link>
    </>
  );
};
