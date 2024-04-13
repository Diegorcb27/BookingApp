import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import OtherHotels from "../ComponetsPages/HotelInfoPage/OtherHotels";
import SliderImgs from "../ComponetsPages/HotelInfoPage/SliderImgs";
import CommentsSections from "../ComponetsPages/HotelInfoPage/CommentsSection";
import ReservationsHotel from "../ComponetsPages/HotelInfoPage/ReservationsHotel";
import "./styles/HotelInfoPage.css";

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
    <div className="container_all_hotel">
      <header className="container_hotel_header">
        <h2 className="title_hotel_header">{hotel?.name}</h2>
        <p className="rating_hotel_header">rating</p>
      </header>
      <div className="container_slider_map">
        <div>
          <SliderImgs hotel={hotel} />
        </div>
        <div className="hotel_map">
          {hotel && (
            <Map
              defaultCenter={[+hotel.lat, +hotel.lon]}
              height={300}
              zoom={13}
            >
              <Marker
                width={50}
                color="red"
                anchor={[+hotel.lat, +hotel.lon]}
              />
            </Map>
          )}
        </div>
      </div>

      <div className="container_hotel_description">
        <div>
          <span><b>{hotel?.city.name},</b></span>
          <span><b>{hotel?.city.country}</b></span>
        </div>
        <div>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </div>
        <p>{hotel?.decription}</p>
      </div>
      <CommentsSections hotelId={hotel?.id} />
      {localStorage.getItem("token") && ( //si estoy logueado aparece reservations
        <ReservationsHotel hotelId={hotel?.id} />
      )}
      <OtherHotels cityId={hotel?.city.id} hotelId={hotel?.id} />
    </div>
  );
};

export default HotelInfoPage;
