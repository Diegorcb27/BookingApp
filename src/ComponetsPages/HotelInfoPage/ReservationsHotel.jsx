import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../Hooks/useCrud";
import "./Styles/ReservationsHotel.css"



const ReservationsHotel = ({hotelId}) => {
const {handleSubmit, register, reset}=useForm()

const [,, createReservation]=useCrud()

const submit = data => {
        const obj={
            ...data,
            hotelId: hotelId
        }
     createReservation("/bookings", obj)

}

  return (
    <div>
      <h2 className="reservation_title">Reservations</h2>
      <form className="reservation_form" onSubmit={handleSubmit(submit)}>
        <label className="form form_label_1">
          <span className="form_span">Check-in</span>
          <input className="form_input" {...register("checkIn")} type="date" />
        </label>
        <label className="form form_label_2">
          <span className="form_span">Check-out</span>
          <input className="form_input" {...register("checkOut")} type="date" />
        </label>
        <button className=" form form_btn_submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationsHotel;
