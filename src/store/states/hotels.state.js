import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: null,  //no puede tener undefined
    reducers: {
        setHotelsG: (state, action)=> action.payload            //aqui iran la actions, el action.payload es el valor que se le pasa por parametro al seter

        
    }
})


export const { setHotelsG } = hotelsSlice.actions   //aqui desestructuramos las actions

export default hotelsSlice.reducer //este es el representante del estado que se guardare en la store


//para hacer llamadas asincronicas y guardarlas en el estado global debemos usar redux thunk para hacer la peticion.

export const getHotelsThunk = (url) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setHotelsG(res.data)))   //hay que despachar cada vez que llamemos al seter 
        .catch(err => console.log(err))
}