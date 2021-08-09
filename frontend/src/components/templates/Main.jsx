import React from 'react'
import './Main.css'

import Home from '../home/Home'

export default props => 
    <main className="content">
        {props.children}
    </main>