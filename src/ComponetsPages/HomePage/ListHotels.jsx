import React from 'react'
import HotelCard from "./HotelCard"
import "./styles/ListHotel.css"

const ListHotels = ({hotels}) => {
  return (
    <div className='card-container'>
        {
          !hotels || hotels?.length===0                             //IMPORTANTE: hotels es un arreglo que contiene todos los elementos que cumplieron la condicion del filtro en homePage, i hay 3 elementos que lo cumplen el arreglo tendra
                                                                    // 3 elementos es decir hotels tendra 3 elementos, si un arreglo tiene elementos y lo niegas se convierte en falso (!hotels), ademas como tiene 3 elementos e igualas el length a 0 saldra falso tambien porque si tiene elementos por ende si ambo son falsos, falso|| falso renderizara el : porque i tiene elementos, ahora i no tiene ningun elemento que cumpla la condicion era un arreglo vacio y si lo niegas se convierte en true y si iguala ee array a 0 era true porque no tiene elemento por ende arrojara el ?.
          ? (<h2>No there hotels with thins name</h2>)

          : (
            hotels?.map( hotel => (
              <HotelCard key={hotel.id} hotel={hotel}/>
          ))
          )
        }
    </div>
  )
}

export default ListHotels