import React from "react";
import { useForm } from "react-hook-form";
import "./styles/FilterPrice.css"

const FilterPrice = ({setfromTo}) => {

    const{handleSubmit, reset, register}=useForm()

    const submit=(data)=>{
        const obj={
            from: Number(data.from)===0 ? 0: +data.from,  //se coloca number porque data a pesar de que coloque tipo number guarda string en la consola por ende puedes colocar number o +, ademas si no coloca nada es un string vacio y con number pasa a 0
            to: +data.to===0 ? Infinity : +data.to

        }
        setfromTo(obj)
    }

  return (
    <div className="container_price">
      <h3 className="price_title">Price</h3>
      <form className="form_price" onSubmit={handleSubmit(submit)}>
        <label>
          <span className="span_price">From</span>
          <input  className="span_input"{...register("from")} type="number" />
        </label>
        <label>
          <span className="span_price">To</span>
          <input className="span_input" {...register("to")} type="number" />
        </label>
        <button className="form_btn">Apply</button>
      </form>
    </div>
  );
};

export default FilterPrice;
