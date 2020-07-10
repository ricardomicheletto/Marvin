import React from 'react';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Application from './Pages/Application';
import UserSettings from './Pages/UserSettings';
import MarvinSettings from './Pages/ApplicationSettings';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/marvin" component={Application}/>
                <Route path="/user-settings" component={UserSettings}/>
                <Route path="/application-settings" component={MarvinSettings}/>
            </Switch>
        </BrowserRouter>
    );
}