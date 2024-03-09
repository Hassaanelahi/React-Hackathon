import React from 'react'
import Header from '../../Components/Header'
import AxiosGet from './AxiosGet'
import ReduxCount from './ReduxCount'
import ReduxAddtocart from './ReduxAddtocart'


const Dashboard = () => {


  return (
    <>
      <Header />

      <AxiosGet />

      <ReduxCount/>

      <ReduxAddtocart/>

    </>
  )
}

export default Dashboard


