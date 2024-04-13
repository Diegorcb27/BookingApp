import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const { handleSubmit, register, reset } = useForm();

  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container_login">
      <div className="container_login_2">
        <i className="bx bxs-user-circle"></i>
        <h2 className="login_title">USER</h2>
        <form className="container_form_login" onSubmit={handleSubmit(submit)}>
          <label>
            <span className="login_span">Email</span>
            <input
              className="login_input"
              {...register("email")}
              type="email"
            />
          </label>
          <label>
            <span className="login_span">Password</span>
            <input
              className="login_input"
              {...register("password")}
              type="password"
            />
          </label>
          <button className="login_btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
