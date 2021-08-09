import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Content from '../components/templates/Main'
import Nav from '../components/templates/Nav'
import Routes from '../main/Routes'


export default props => 
    <BrowserRouter>
        <div className="app">
            <Nav></Nav>
            <Routes></Routes>
        </div>
    </BrowserRouter>