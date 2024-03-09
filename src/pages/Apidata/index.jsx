import React from 'react'
import { useParams } from 'react-router-dom'

const Apidata = () => {

    const {id} = useParams();
    console.log(id)

    // use id with axios to get all data like dashboard code

  return (
    <>

        <h1>Hellow</h1>
    
    </>
  )
}

export default Apidata