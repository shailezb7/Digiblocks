import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GstServices from '../Pages/GstServices'
import GstDetails from '../Pages/GstDetails'

const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<GstServices/>}/>
        <Route path='/details' element={<GstDetails/>}/>
        
    </Routes>
  )
}

export default AllRoutes