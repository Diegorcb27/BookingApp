import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../Hooks/useCrud'

const FormReviews = ({reserveSelected,  setReserveSelected}) => {  //reserveSelect sale de reserve card para recibir la reserva del hotel que seleciones y acar su hotel.id

const {handleSubmit, register, reset} = useForm()

const [, , createReview]=useCrud()


const submit = data =>{
const obj={
    ...data,
    hotelId: reserveSelected?.hotelId,  //eto es para enviar al backend esa informacion del create
    rating: +data.rating  //transformamos este elemento a numero
}

createReview("/reviews", obj)

reset({
    rating: "5",
    comment: ""
})

setReserveSelected()

}

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <h3>Form Reviews</h3>
            <label>
                <span>Rating</span>
                <select {...register("rating")}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </label>
            <label>
                <span>Comments</span>
                <textarea {...register("comment")}/>
            </label>
            <button>Submit</button>
        </form>
    </div>

  )
}

export default FormReviews