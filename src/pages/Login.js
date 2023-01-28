import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // dodac login page z obsluga zlego inputu.
  // Bootstrap / materialUI

  function onSubmit(e) {
    e.preventDefault();

    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "abc@example.com" &&
      e.target.password.value === "secret"
    ) {
      navigate("/home");
    } else {
      alert("Wrong email or password combination");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label>email</label>
      <input type="email" name="email" placeholder="nome@email.com.br" />
      <label>password</label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
