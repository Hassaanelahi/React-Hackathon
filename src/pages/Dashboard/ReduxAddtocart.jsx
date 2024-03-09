import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Components/Loader';
import { fetchProducts } from '../../reduxStore/slices/getDataSlice';
import { addCart, removeCart } from '../../reduxStore/slices/addToCartSlice';

const ReduxAddtocart = () => {

  // -------------------- Data Fetch -----------------------
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((state) => state.getDataSReducer);

  // console.log("isLoading", isLoading)
  // console.log("products", products)
  // console.log("isError ",isError)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])




  // ------------------- Add To cart ------------------------

  const {Cart} = useSelector((state)=>state.addToCartReducer)
  // console.log(Cart)
  




  return (
    <>
      {
        isLoading ? (<Loader />) : (
          <>
            <h2>cart: {Cart.length}</h2>
            <ul>
              {
                products.map((value, index) => {
                  return <li key={index}>
                    {value.title}
                    <button onClick={() => { dispatch(addCart(value)) }}>Add Catr</button>
                  </li>
                })
              }
            </ul>


            <h2>Cart Data</h2>
            <ul>
              {
                Cart.map((value, index) => {
                  return <li key={index}>
                    {value.title}
                    <button onClick={() => { dispatch(removeCart(value)) }}>Remove cart</button>
                  </li>
                })
              }
            </ul>
          </>
        )
      }

    </>
  )
}

export default ReduxAddtocart