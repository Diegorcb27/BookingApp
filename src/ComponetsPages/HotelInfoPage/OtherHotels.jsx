import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({cityId, hotelId}) => {

const url=`https://hotels-api.academlo.tech/hotels/cityId=${cityId}`
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
    <div>
        {
            hotels<1 ? "" :    <h2>Other Hotels in {hotels?.results[0].city.name}</h2> 
        }
     
        
        <div className='card-container'>
            {
                hotels ? 
                hotels?.filter(hotelInfo=>hotelInfo.id !== hotelId).map(hotelInfo => { //hotelInfo son los hotoles con los id de la ciudad pero cada hotel tiene un id distinto, hotelId es el hotelId que queremos que queremo comparar
                    <HotelCard 
                        hotel={hotelInfo}
                        key={hotelInfo.id}
                    />
                })
                : ""
            }
        </div>
    </div>
  )
}

export default OtherHotels