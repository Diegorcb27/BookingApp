import React, { useRef } from 'react'
import "./styles/FilterName.css"

const FilterSearch = ({setNameImput}) => {

    const inputSearch = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameImput(inputSearch.current.value.trim().toLowerCase())
        inputSearch.current.value=""   //para borrar el valor del input
       
    }

  return (
    <form className="filter_name_form" onSubmit={handleSubmit}>
        <input className="filter_name_input" ref={inputSearch} type="text"/>
        <button className='filter_name_btn'><span className='filter_name_search'>Search</span></button>
    </form>
  )
}

export default FilterSearch