import React, { useEffect } from 'react'
import useCrud from '../../Hooks/useCrud'

const CommentsSection = ({hotelId}) => {

const [reviews, getReviews] = useCrud()

useEffect(() => {
  if(hotelId){
    getReviews(`/reviews?hotelId=${hotelId}`)
  }

}, [hotelId])

    
  return (  
    <div>
      <div>
        {
          reviews?.results.map(reviewInfo => (
            <div key={reviewInfo.id}>
              <h4>{}</h4>
              <div>{reviewInfo.rating}⭐</div>
              <p>{reviewInfo.comment}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CommentsSection