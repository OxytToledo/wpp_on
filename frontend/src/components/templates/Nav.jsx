import React, { useState, useEffect } from 'react'
import './Nav.css'

import SearchIcon from '@material-ui/icons/Search';

import Header from './Header'
import UpdateChatList from './UpdateChatList'

export default props => 
    <aside className="menu-area">
        <Header></Header>

        <div className="search">
            <div className="seach-input">
                <i className="nav-icon v-middle"><SearchIcon fontSize="small" style={{color: '#919191'}}></SearchIcon></i>
                <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
        </div>
        <div className="chatList">
        <UpdateChatList></UpdateChatList>
        </div>
    </aside>