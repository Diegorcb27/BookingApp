import React, { useEffect, useState } from "react";
import { getHotelsThunk } from "../store/states/hotels.state";
import { useDispatch, useSelector } from "react-redux";
import ListHotels from "../ComponetsPages/HomePage/ListHotels";
import FilterName from "../ComponetsPages/HomePage/FilterName";
import FilterPrice from "../ComponetsPages/HomePage/FilterPrice";
import FilterCities from "../ComponetsPages/HomePage/FilterCities";
import "./styles/HomePage.css";

const HomePage = () => {
  const [nameImput, setNameImput] = useState(""); //como todos lo hoteles tienen un espacio en el nombre todos lo hoteles cumplen ese filtro
  const [fromTo, setfromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const hotels = useSelector((states) => states.hotels); //states es un objeto con todos los estado globales y llamamos al estado global hotels

  const dispatch = useDispatch(); //llamamos al despachador

  useEffect(() => {
    const url = "https://api-booking-app-md3-gen33.onrender.com/hotels";
    dispatch(getHotelsThunk(url)); //para llamar a las thunk tambien  hay que despcharla, pero como dentro esta el seter del estado global o la action hay que usar useSelector
  }, []);

  // console.log(hotels);
  // console.log(nameImput);
  // console.log(fromTo);

  const hotelsFiltered = hotels?.filter((hotelInfo) => {   //en hotelsFiltered guarda los hoteles filtadros segun por precio o nombre
    //Filter Name
    const filterName = hotelInfo.name.toLowerCase().includes(nameImput); // filterName es la condicion, aqui con el metodo include verificamos si lo que eta dentro del input coincide con el string del name, si eta incluido es true i no false

    //Filter price
    const priceHotel = +hotelInfo.price;
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to; //tarea: ordenar por precio

    //Filter Cities

    return filterName && filterPrice;
  });

  
  return (
    <div>
     
      <div className="filter_name">
        <FilterName setNameImput={setNameImput} />
      </div>
    
      <div className="container_hp">
      
        <div className="container_filter_priceCities">
          <h2 className="filters">Filters</h2>
          <FilterPrice setfromTo={setfromTo} />
          <FilterCities setNameImput={setNameImput} />
        </div>
        <div className="container_listHotels">
          <ListHotels hotels={hotelsFiltered} />
        </div>
      </div>
      {/**como todos lo nombres tienen un string vacio entonces saldran todos lo hoteles */}
    </div>
  );
};

export default HomePage;
