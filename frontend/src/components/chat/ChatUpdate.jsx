import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chatlist from '../templates/Chatlist'
import './ChatUpdate.css'

export default function UpdateChat() {

    const [chatList, setChatlist] = useState([
        {Id: 1},
        {Id: 2},
        {Id: 3},
        {Id: 4},
        {Id: 5},
        {Id: 6},
        {Id: 7},
        {Id: 8},
        {Id: 9}
    ])

    const [litChat, setLitChat] = useState({})

    return (
            <aside className="chatList">
                <Link style={{textDecoration: 'none'}} to={`/chat/${litChat}`}> 
                    <div>
                        {chatList.map((item, key) => ( <Chatlist key={key} onClick={() => setLitChat(key)}/> ))}
                    </div>
                </Link>
            </aside>
    )
}