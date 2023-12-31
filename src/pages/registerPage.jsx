import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/registerInputHooks";

import { register } from "../utils/network-data";

const RegisterPage = () => {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }
  return (
    <section className="register-page">
      <h2>Form Registrasi</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
