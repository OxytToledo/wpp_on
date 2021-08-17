import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import CurrentChat from '../components/chat/CurrentChat'
import ChatUpdate from '../components/chat/ChatUpdate'


export default props => 
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path={`/chat/:id`} component={CurrentChat}></Route>
        <Redirect from="*" to="/"></Redirect>
    </Switch>