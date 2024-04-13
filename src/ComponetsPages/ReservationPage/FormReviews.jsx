import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../Hooks/useCrud";
import "./styles/FormReviews.css";
import getDaysFromDates from "../../services/getDaysFromDates";

const FormReviews = ({
  reserveSelected,
  setReserveSelected,
  setisFormClose,
}) => {
  //reserveSelect sale de reserve card para recibir la reserva del hotel que seleciones y acar su hotel.id

  const { handleSubmit, register, reset } = useForm();

  const [, , createReview] = useCrud();

  const submit = (data) => {
    const obj = {
      ...data,
      hotelId: reserveSelected?.hotelId, //eto es para enviar al backend esa informacion del create
      rating: +data.rating, //transformamos este elemento a numero
    };

    createReview("/reviews", obj);

    reset({
      rating: "5",
      comment: "",
    });

    setReserveSelected();
  };

  const handleCloseForm = () => {
    setisFormClose(true);
  };
  const reservationsDays_2 = getDaysFromDates(reserveSelected?.checkIn, reserveSelected?.checkOut);

  return (
    <div>
      <form className="form_review" onSubmit={handleSubmit(submit)}>
        <div onClick={handleCloseForm} className="form_x">
          x
        </div>
        <h3 className="form_title">Reviews</h3>
        <div className="form_container_description">
          <img
            className="form_hotel_img"
            src={reserveSelected?.hotel.images[0].url}
            alt=""
          />
          <h3>{reserveSelected?.hotel.name}</h3>
          <div>
            {reserveSelected?.hotel.city.name},{" "}
            {reserveSelected?.hotel.city.country}
          </div>
          <div>
            <span><b>Reservation's days:</b></span>
            <span className="form_span_value_1">{reservationsDays_2}</span>
          </div>
          <div>
            <span><b>subtotal Price: </b></span>
            <span className="form_span_value">USD {Number(reserveSelected?.hotel.price) * reservationsDays_2}</span>
          </div>
        </div>
        
        <label className="form_label">
          <span className="form_rating">
            <b>Rating</b>
          </span>
          <select {...register("rating")}>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </label>
        <label className="form_label">
          <span>
            <b>Comments</b>
          </span>
          <textarea className="form_field_comment" {...register("comment")} />
        </label>
        <button className="form_review_btn">Submit</button>
      </form>
    </div>
  );
};

export default FormReviews;
