import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from "./components/login/Login";
import TabContent from "./components/tabs/TabContent"; 

export default () =>

<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Login} /> s
        <Route path="/user" component={TabContent} />
    </Switch>
</ BrowserRouter>