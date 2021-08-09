import React from 'react'
import './Home.css'
import Main from '../templates/Main'
import logo from '../../assets/imgs/homeChat.PNG'

export default props => 
    <Main>
        <div className="chatHome">
            <img src={logo} alt="" />
            <h1>Mantenha seu celular conectado!</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/> Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi</h2>
        </div>
    </Main>