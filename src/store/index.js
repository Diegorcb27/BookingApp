import { configureStore } from "@reduxjs/toolkit";
import hotels from "./states/hotels.state"

export default configureStore({
    reducer:{
        hotels   //para llamarlo en otra parte hay que usar useSelector, el reducer es como si fuera el state en el callback en el useSelector
    }

}
)