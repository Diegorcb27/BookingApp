import React from "react";
import getDaysFromDates from "../../services/getDaysFromDates";
import useCrud from "../../Hooks/useCrud";

const ReserveCard = ({ reserve, deleteReservation, setReserveSelected }) => {
  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut);
  const handleDelete = () => {
    deleteReservation("/bookings", reserve.id);
  };

  const handleReviews = () =>{
    setReserveSelected(reserve)
  }
console.log(reserve);
  return (
    <article>
      <header>
        <img className="reserve_img" src={reserve.hotel.images?.[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>
          {reserve.hotel.city?.name}, {reserve.hotel.city?.country}
        </div>
        <div onClick={handleReviews} className="reserve_rating">Rate and comment this visit...</div>
        <div>
          <span>Reservation's days:</span>
          <span>{reservationsDays}</span>
        </div>
        <div>
          <span>subtotal Price: </span>
          <span>{Number(reserve.hotel.price) * reservationsDays}</span>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </article>
  );
};

export default ReserveCard;
