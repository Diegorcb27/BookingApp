//con esta funcion le vamos a enviar un token al backend en Authorization, que e encuentra en el header en la parte de Authorization

const getConfigToken=()=>{
    return {
         headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
         }
    }
}

export default getConfigToken