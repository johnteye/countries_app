import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Countries from './components/Countries'
import Country from './components/Country'


export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Countries />} />
    <Route path="/country/:countryName" element={<Country />} />
  </Routes>
  )
}