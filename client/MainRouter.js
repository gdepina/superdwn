import React, {Component} from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import {NavbarNested} from './components/Menu'

function MainRouter() {
        return (
            <Routes>              
                <Route path="/" element={<NavbarNested/>}/>
            </Routes>
        )
}

export default MainRouter
