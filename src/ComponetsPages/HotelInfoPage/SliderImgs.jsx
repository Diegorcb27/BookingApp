import React, { useState } from 'react'
import "./Styles/SliderImgs.css"

const SliderImgs = ({hotel}) => {

    const [imgSelected, setImgSelected] = useState(0)

    const objStyle={
        transform: `translateX(calc(-${imgSelected}/${hotel?.images.length}*100%))`,
        width: `calc(${hotel?.images.length}*100%)` /*mide 8 veces lo que mide el slider exterior*/
    }

    console.log(hotel);

const handlePrev=()=>{
    if(imgSelected-1 >= 0){
        setImgSelected(imgSelected - 1 )
    }
   
}

const handleNext=()=>{
    if(imgSelected + 1 <= hotel?.images.length-1){
        setImgSelected(cv => cv+1) //current value es el valor actual del estado 
    }
   
}

  return (
    <div className='Slider'>
        <button onClick={handlePrev} className='slider_btn'>&lt;</button>
        <div className='slider_exterior'>
            <div style={objStyle} className='slider_interior'>
                {
                    hotel?.images.map(imgInfo => (
                        <div className='slider_img-container' key={imgInfo.id}>
                            <img className='slider_img' src={imgInfo.url} alt=''/>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleNext} className='slider_btn'>&gt;</button>
        </div>
    </div>
  )
}

export default SliderImgs