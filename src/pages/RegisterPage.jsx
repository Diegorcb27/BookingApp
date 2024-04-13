import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
  const { handleSubmit, register, reset } = useForm();

  const { createNewUser } = useAuth();

  const submit = (data) => {
    createNewUser(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "other",
    });
  };

  return (
    <div className="container_register">
      <div className="container_register_2">
        <div className="container_register_title">
          <h2 className="register_title">Register</h2>
        </div>
        <form
          className="container_form_register"
          onSubmit={handleSubmit(submit)}
        >
          <label className="register_label" >
            <span className="register_span">First Name</span>
            <input className="register_input" {...register("firstName")} type="text" />
          </label >
          <label className="register_label">
            <span className="register_span">Last Name</span>
            <input className="register_input" {...register("lastName")} type="text" />
          </label >
          <label className="register_label">
            <span className="register_span">Email</span>
            <input className="register_input" {...register("email")} type="email" />
          </label>
          <label className="register_label">
            <span className="register_span">Password</span>
            <input className="register_input" {...register("password")} type="password" />
          </label>
          <label className="register_label">
            <span className="register_span">Gender</span>
            <select className="register_input" {...register("gender")}>
              <option value="unknown">Unknown</option>
              <option value="MALE">male</option>
              <option value="FAMALE">female</option>
              <option value="OTHER">prefer not say</option>
            </select>
          </label>
          <button className="register_btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
