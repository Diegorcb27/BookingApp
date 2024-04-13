import React, { useEffect, useState } from "react";
import useCrud from "../Hooks/useCrud";
import ReserveCard from "../ComponetsPages/ReservationPage/ReserveCard";
import FormReviews from "../ComponetsPages/ReservationPage/FormReviews";
import "./styles/ReservationPage.css";

const ReervationsPage = () => {
  //cada vez que queremos entrar en endpoints protegido usamos useCrud

  const [reserveSelected, setReserveSelected] = useState();
  const [isFormClose, setisFormClose] = useState(true)

  const [reservations, getReservations, , deleteReservation] = useCrud();

  useEffect(() => {
    getReservations("/bookings");
  }, []);

  // console.log(reservations);
  console.log(reserveSelected);

  return (
    <div className="reservation_page_container">
      
      <div className={`form_container ${isFormClose && "form_close"}`}>  {/*si es true de cierra y si es false se abre  */}
        
        <FormReviews
          reserveSelected={reserveSelected}
          setReserveSelected={setReserveSelected}
          setisFormClose={setisFormClose}
        />
      </div>
      <div className="container_reservation">
        {reservations?.map((reserve) => (
          <ReserveCard
            key={reserve.id}
            reserve={reserve}
            deleteReservation={deleteReservation}
            setReserveSelected={setReserveSelected}
            setisFormClose={setisFormClose}
          />
        ))}
      </div>
    </div>
  );
};

export default ReervationsPage;
