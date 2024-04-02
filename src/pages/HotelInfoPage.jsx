import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import OtherHotels from "../ComponetsPages/HotelInfoPage/OtherHotels";
import SliderImgs from "../ComponetsPages/HotelInfoPage/SliderImgs";
import CommentsSections from "../ComponetsPages/HotelInfoPage/CommentsSection";
import ReservationsHotel from '../ComponetsPages/HotelInfoPage/ReservationsHotel';

const HotelInfoPage = () => {
  const { id } = useParams(); //se guia del id

  //no hay que uar el etado global porque solo ocuparemo esa informacion en esta pagina, hay que crear un useFetch o custom hook

  const url = `https://api-booking-app-md3-gen33.onrender.com/hotels/${id}`;

  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
  
      getHotel();
    
   
  }, [url]);

  console.log(hotel);

  return (
    <div>
      <header>
        <h2>{hotel?.name}</h2>
        <span>rating</span>
      </header>
    <SliderImgs hotel={hotel}/>
      <div>
        {
          hotel && (
          <Map defaultCenter={[+hotel.lat, +hotel.lon]} height={300} zoom={13}>
            <Marker 
            width={50}
            color="red"
            anchor={[+hotel.lat, +hotel.lon]}
            />
            
          </Map>
            )
        }
      </div>
      <div>
        <div>
          <span>{hotel?.city.name}</span>
          <span>{hotel?.city.country}</span>
        </div>
        <div>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </div>
        <p>{hotel?.decription}</p>
      </div>
      <CommentsSections
        hotelId={hotel?.id}
      />
      {
        localStorage.getItem("token") && (    //si estoy logueado aparece reservations
          <ReservationsHotel
          hotelId={hotel?.id}
          />
        )
      }
      <OtherHotels 
      cityId={hotel?.city.id}
      hotelId={hotel?.id}
      />
    
    </div>
  );
};

export default HotelInfoPage;
