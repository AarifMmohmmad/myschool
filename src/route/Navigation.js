import React from 'react'
import HomePage from '../components/HomePage'
import { Route, Routes } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <Routes>
                <Route exact path="Home" element={<HomePage/>} />

            </Routes>
        </>
    )
}

export default Navigation
