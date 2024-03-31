import axios from 'axios'
import React, { useState } from 'react'

const useFetch = (url) => {
 
    const [response, setresponse] = useState()


    const getApi = ()=>{

        axios.get(url)
            .then(res => setresponse(res.data))
            .catch(err => console.log(err))

    }

return [response, getApi]


}

export default useFetch