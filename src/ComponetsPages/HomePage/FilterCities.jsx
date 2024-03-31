import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { getHotelsThunk } from "../../store/states/hotels.state";

const FilterCities = () => {
  const url = "https://hotels-api.academlo.tech/cities";
  const [cities, getCities] = useFetch(url);

  useEffect(() => {
    getCities();
  }, []);

//   console.log(cities);

const dispatch = useDispatch()

const handleFilterCities = (id) =>{
    
    if(id !== "all cities"){
        let url=`https://hotels-api.academlo.tech/hotels?cityId=${id}`
        dispatch(getHotelsThunk(url))      //hace la peticion de cada hotel con ese id donde le podemo coloca cityId como parametro
       

    } else{
        let url = "https://hotels-api.academlo.tech/hotels"
        dispatch(getHotelsThunk(url))
    }
    
}

  return (
    <div>
      <h3>Cities</h3>
      <ul>
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
