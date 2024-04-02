import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/HotelCard.css"

const HotelCard = ({hotel}) => {

  const navigate = useNavigate()

const handleNavigate = () =>{
navigate(`/hotel/${hotel.id}`)
}

  return (
    <article className='card'>
      <header className='card_header'>
        <img className="card_img" src={hotel.images[0]?.url} alt="" />
      </header>
      <section className='card_body'>
        <h3 className='card_name'>{hotel.name}</h3>
        <span className='card_rating'>Rating</span>
        <p className='card_location'>{hotel.city.name}, {hotel.city.country}</p>
        <div className='card_price'>{hotel.price}</div>
        <button className="card_btn" onClick={handleNavigate}>See more...</button>
      </section>
     
    </article>
  )
}

export default HotelCard