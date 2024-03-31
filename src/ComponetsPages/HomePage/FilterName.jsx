import React, { useRef } from 'react'

const FilterSearch = ({setNameImput}) => {

    const inputSearch = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameImput(inputSearch.current.value.trim().toLowerCase())
        inputSearch.current.value=""   //para borrar el valor del input
       
    }

  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text"/>
        <button>Search</button>
    </form>
  )
}

export default FilterSearch