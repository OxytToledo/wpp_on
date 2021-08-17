import React, { Fragment } from 'react'
import './Chatlist.css'
import avatar from '../../assets/imgs/avatar.png'

export default props => 
    <React.Fragment>
        <div className="chatList" onClick={props.onClick}>
            <div className="divChatList"><img src={avatar} alt="" className="chatList-avatar" /></div>
            <div className="chatList-lines">
                <div className="chatList-line">
                    <div className="chatList-name">Zé Ramalho</div>
                    <div className="chatList-date">18:30</div>
                </div>
                <div className="chatList-line">
                    <div className="chatList-lastMsg">
                        <p>Eu vou te jogar Num pano de guardar confetes. Eu vou te jogar. Num pano de guardar confetes..</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>