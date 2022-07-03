import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Auth/Auth'
import { Register } from './Auth/Register'
import {Contacts} from './Contacts/Contacts'

export const Main:FC = () => {
  return (
  <Routes>
    <Route
        path="/main"
        element={<Contacts/>}
    />
    <Route
        path="*"
        element={<Auth/>}
    />
    <Route 
        path='/signup'
        element={<Register/>}
    />
  </Routes>
  )
}