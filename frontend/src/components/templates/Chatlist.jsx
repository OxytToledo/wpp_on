import React, { Fragment } from 'react'
import './Chatlist.css'
import avatar from '../../assets/imgs/avatar.png'

export default props => 
    <React.Fragment>
        <div className="chatList">
            <div className="divChatList"><img src={avatar} alt="" className="chatList-avatar" /></div>
            <div className="chatList-lines">
                <div className="chatList-line">
                    <div className="chatList-name">Robert Deniro</div>
                    <div className="chatList-date">18:30</div>
                </div>
                <div className="chatList-line">
                    <div className="chatList-lastMsg">
                        <p>Ops, tudo bem?Ops, tudo bem?Ops, tudo bem?Ops, tudo bem?Ops, tudo bem?Ops, tudo bem?Ops, tudo bem?Ops, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>