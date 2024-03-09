import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AxiosGet = () => {

    const [apidata, setapidata] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const responseData = await axios.get("https://fakestoreapi.com/products");
            // console.log("responseData.data",responseData.data)
            setapidata(responseData.data)

        } catch (error) {
            console.log(error)
        }
    }
    // console.log("apidata", apidata)


    return (
        <>
            <ul>
                {
                    apidata.map((value, index) => {
                        return <li key={index}>
                            {value.title}
                            <button onClick={() => { navigate(`/apiData/${value.id}`) }}>click here</button>
                        </li>
                    })
                    // use navigate in onclick to go detail page like
                    // navigate(`/apiData/${id}`);


                }
            </ul>
        </>
    )
}

export default AxiosGet