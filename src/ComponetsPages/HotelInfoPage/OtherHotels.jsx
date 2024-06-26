import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'
import "./Styles/OtherHotels.css"
// import OtherHotels from "./Styles/OtherHotels.css"

const OtherHotels = ({cityId, hotelId}) => {

const url=`https://api-booking-app-md3-gen33.onrender.com/hotels?cityId=${cityId}`
const [hotels, getHotels]=useFetch(url)

useEffect(() => {
    if(cityId){
        getHotels()
    }
  getHotels
}, [cityId])

//cityId && getHotels() corto circuito

console.log(hotels);

  return (
    <div className='container_otherHotels'>
         {
            hotels<1 ? "" :    <h2>Other Hotels in <span className='title_span_hotel'>{hotels?.[0].city.name}</span></h2> 
        } 
     
        <div className='card-container'>
            {
               
                hotels?.filter(hotelInfo=>hotelInfo.id !== hotelId).map(hotelInfo => (//hotelInfo son los hotoles con los id de la ciudad pero cada hotel tiene un id distinto, hotelId es el hotelId que queremos que queremo comparar
              //hotelInfo son los hotoles con los id de la ciudad pero cada hotel tiene un id distinto, hotelId es el hotelId que queremos que queremo comparar
                    <HotelCard 
                        hotel={hotelInfo}
                        key={hotelInfo.id}
                    />
               
              
                ))
            }
        </div>
    </div>
    )}
  

export default OtherHotels