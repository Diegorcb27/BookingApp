import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { getHotelsThunk } from "../../store/states/hotels.state";
import "./styles/FilterCities.css"

const FilterCities = ({setNameImput}) => {
  const url = "https://api-booking-app-md3-gen33.onrender.com/cities";
  const [cities, getCities] = useFetch(url);

  useEffect(() => {
    getCities();
  }, []);

//   console.log(cities);

const dispatch = useDispatch()

const handleFilterCities = (id) =>{
    
    if(id !== "all cities"){
        let url=`https://api-booking-app-md3-gen33.onrender.com/hotels?cityId=${id}`
        dispatch(getHotelsThunk(url))      //hace la peticion de cada hotel con ese id donde le podemo coloca cityId como parametro
       

    } else{
        let url = "https://api-booking-app-md3-gen33.onrender.com/hotels"
        dispatch(getHotelsThunk(url))
        setNameImput("")
    }
    
}

  return (
    <div>
      <h3 className="cities_title">Cities</h3>
      <ul className="filter_cities">
        <li onClick={() => handleFilterCities("all cities")}>All cities</li>
        {
            cities?.map(city=>(
                <li onClick={() => handleFilterCities(city.id)} key={city.id}>{city.name}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default FilterCities;
