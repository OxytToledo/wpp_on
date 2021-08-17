import React from 'react'
import Main from '../templates/Main'
import './CurrentChat.css'

import avatar from '../../assets/imgs/avatar.png'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SendIcon from '@material-ui/icons/Send'
// import CloseIcon from '@material-ui/icons/Close'
// import MicIcon from '@material-ui/icons/Mic'

export default function ContentChat() {

    // const [text, setText] = useState('')

    return (
    <Main>
        <div className="currentChat">

                <div className="chatHeader">
                    <div className="headerInfo">
                        <img className="headerAvatar" src={avatar} alt="avatar" />
                        <div className="chatName"></div>
                    </div>
                    <div className="headerButtons">
                        <div className="chatBtn">
                            <SearchIcon></SearchIcon>
                        </div>
                        <div className="chatBtn">
                            <AttachFileIcon></AttachFileIcon>
                        </div>
                        <div className="chatBtn">
                            <MoreVertIcon></MoreVertIcon>
                        </div>
                    </div>
                </div>

            <div className="chatBody">

            </div>

            <div className="chatFooter">
                <div className="footerCurrent">
                    <div className="chatBtn">
                        <InsertEmoticonIcon></InsertEmoticonIcon>
                    </div>
                    </div>
                    <div className="footerInput">
                        <input className="chatInput" type="text" placeholder="Digite uma mensagem"/>
                    </div>
                    <div className="footerBefore">
                        <div className="chatBtn">
                            <SendIcon></SendIcon>
                        </div>
                    </div>
            </div>
        </div>
    </Main>
    )

}
