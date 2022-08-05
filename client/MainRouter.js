import React, {Component} from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Menu from './components/Menu'

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Menu/>}/>
        </Routes>
    )
}

export default MainRouter
