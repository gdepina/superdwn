import React, {Component} from 'react'
import {Route, Routes, Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="teo">Teo</Link> |{" "}
                <Link to="pela2">pela2</Link>
            </nav>
        </div>
    );
}


function Teo() {
    return (
        <div>
            <h1>TEO</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="teo">Teo</Link> |{" "}
                <Link to="pela2">pela2</Link>
            </nav>
            <div>TEO PAGE</div>
        </div>
    );
}

function Pela() {
    return (
        <div>
            <h1>PELA2</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="teo">Teo</Link> |{" "}
                <Link to="/">pela2</Link>
            </nav>
            <div>PELA PAGE</div>
        </div>
    );
}

function MainRouter() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/teo" element={<Teo/>}/>
                <Route path="/pela2" element={<Pela/>}/>
            </Routes>
        )
}

export default MainRouter
