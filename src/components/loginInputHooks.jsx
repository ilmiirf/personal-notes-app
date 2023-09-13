import React, { useState } from "react";
import PropTypes from "prop-types";

const LoginInput = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    return { email: setEmail(event.target.value) };
  };
  const onPasswordChange = (event) => {
    return { password: setPassword(event.target.value) };
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>Masuk</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
