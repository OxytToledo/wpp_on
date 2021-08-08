import React from 'react'
import './Header.css'
import avatar from '../../assets/imgs/avatar.png'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default props => 
    <header className="header">
        <img src={avatar} alt="avatar"/>
        <div className="header-buttons">
            <div className="header-btn">
                <DonutLargeIcon style={{color: "#919191"}}></DonutLargeIcon>
            </div>
            <div className="header-btn">
                <ChatIcon style={{color: "#919191"}}></ChatIcon>
            </div>
            <div className="header-btn">
                <MoreVertIcon style={{color: "#919191"}}></MoreVertIcon>
            </div>
        </div>
    </header>