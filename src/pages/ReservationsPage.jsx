import React, { useEffect, useState } from 'react'
import useCrud from '../Hooks/useCrud'
import ReserveCard from '../ComponetsPages/ReservationPage/ReserveCard'
import FormReviews from '../ComponetsPages/ReservationPage/FormReviews'

const ReervationsPage = () => {
//cada vez que queremos entrar en endpoints protegido usamos useCrud

const [reserveSelected, setReserveSelected] = useState()

const [reservations, getReservations, , deleteReservation]=useCrud()



useEffect(() => {
  getReservations("/bookings")
}, [])

console.log(reservations);



  return (
    <div>
      <h2>Reservations</h2>
      <FormReviews
      reserveSelected={reserveSelected} 
      setReserveSelected={setReserveSelected}
      />
      <div>
        {
          reservations?.map( reserve=> {
            <ReserveCard
            key={reserve.id}
            reserve={reserve}
            deleteReservation={deleteReservation}
            setReserveSelected={setReserveSelected} 
            />
          })
        }
      </div>
    </div>
  )
}

export default ReervationsPage