import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

const {handleSubmit, register, reset }=useForm()

const{loginUser}=useAuth()

const submit = data =>{
  loginUser(data)
  reset({
    email: "",
    password: ""
  })
}

const navigate = useNavigate()

const handleWelcome=()=>{

navigate("/welcome")

}

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register("email")} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register("password")} type="password" />
        </label>
        <button onClick={handleWelcome}>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
