import React, { useState, useEffect } from 'react'
import Chatlist from './Chatlist'
import './UpdateChatList.css'

export default function UpdateChat() {

    const [chatList, setChatlist] = useState([{},{},{},{},{},{},{},{},{},{},{}])

    return (
        <aside className="chatList">
            <div className="noScroll">
                {chatList.map((item, key) => (
                    <Chatlist key={key}/>
                ))}
            </div>
        </aside>
    )
}