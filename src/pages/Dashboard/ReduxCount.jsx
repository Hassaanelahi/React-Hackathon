import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../../reduxStore/slices/countSlice';

const ReduxCount = () => {

    // ---------------------- Redux --------------------------- //

    const { count } = useSelector((state) => state.countReducer);

    const dispatch = useDispatch();


    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => {
                dispatch(addCount())
            }}>Add</button>
        </>
    )
}

export default ReduxCount