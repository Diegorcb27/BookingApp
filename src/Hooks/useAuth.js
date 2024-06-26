import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

  const navigate = useNavigate()

  //Regiter

  const createNewUser = (data) => {
    const url = "https://api-booking-app-md3-gen33.onrender.com/users";
    axios.post(url, data)
      .then((res) => console.log(res.data)) //no hace falta guardar la informacion en un estado, todo esta guardado en la base de datos
      .catch((err) => console.log(err));
  };

  //Login

  const loginUser = (data) => {
    const url="https://api-booking-app-md3-gen33.onrender.com/users/login"
    axios.post(url, data)
      .then((res) => {
        navigate("/welcome")
        console.log(res.data) //no hace falta guardar la informacion en un estado, todo esta guardado en la base de datos
        localStorage.setItem("token", res.data.token)  //guardamos el token en el localStorage pero no se pueden guardar objeto ni arreglos
        localStorage.setItem("user", JSON.stringify(res.data.user))}) //re.data.user es un objeto pero el JSON.stringify lo transforma a texto ya que no se pueden guardar objeto en el localStorage) 
      .catch((err) => console.log(err));
      
  };

  return {createNewUser, loginUser}
};

export default useAuth;
