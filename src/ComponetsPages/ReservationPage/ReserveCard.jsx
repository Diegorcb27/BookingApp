import React, { useState } from "react";
import getDaysFromDates from "../../services/getDaysFromDates";
import useCrud from "../../Hooks/useCrud";
import "./styles/ReserveCard.css";
import { useNavigate } from "react-router-dom";

const ReserveCard = ({ reserve, deleteReservation, setReserveSelected, setisFormClose}) => {
  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut);



  const handleDelete = () => {
    deleteReservation("/bookings", reserve.id);
  };

  const navigate=useNavigate()

  const handleNavigate = () =>{
    navigate(`/hotel/${reserve.hotel.id}`)
    }

   

  const handleReviews = () => {
    setReserveSelected(reserve);  //aqui le estoy pasando el hotel al que le estoy haciendo reserve
    setisFormClose(false)
  };



  // console.log(reserve);
  return (
    <article  className="container_reserve">
      <header>
        <img
          className="reserve_img"
          src={reserve.hotel.images?.[0].url}
          alt=""
        />
      </header>
      <section className="container_section_reserve">

        <div className="container_section_dates_1">
          <h3 onClick={handleNavigate} className="hotel_name">{reserve.hotel.name}</h3>
          <div>
            {reserve.hotel.city?.name}, {reserve.hotel.city?.country}
          </div>
          <div  onClick={handleReviews} className="reserve_rating">
            Rate and comment this visit...
          </div>
        </div>

        <div className="container_section_dates_2">
          <div>
            <span>Reservation's days:</span>
            <span className="span_value">{reservationsDays}</span>
          </div>
          <div>
            <span>subtotal Price: </span>
            <span className="span_value">USD {Number(reserve.hotel.price) * reservationsDays}</span>
          </div>
        </div>

       

        <button className="reserve_btn" onClick={handleDelete}>{<i className='bx bx-task-x'></i>}</button>
      </section>
    </article>
  );
};

export default ReserveCard;
