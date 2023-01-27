import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const VALID_PASSWORD = "secret";
  const VALID_LOGIN = "abc";

  // dodac login page z obsluga zlego inputu.
  // Bootstrap / materialUI

  function onSubmit(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <form onSubmit={onSubmit}>
      <input />
      <input type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
