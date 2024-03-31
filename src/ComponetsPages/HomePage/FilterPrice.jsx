import React from "react";
import { useForm } from "react-hook-form";

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
    <div>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input  {...register("from")} type="number" />
        </label>
        <label>
          <span>To</span>
          <input {...register("to")} type="number" />
        </label>
        <button>Apply</button>
      </form>
    </div>
  );
};

export default FilterPrice;
