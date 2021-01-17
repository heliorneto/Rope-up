import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Capture from './Pages/Capture';
import Register from './Pages/Register';
import Blog from './Pages/Blog';
import Sobre from './Pages/Sobre';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/capture" component={Capture}/>
                <Route path="/cadastro" component={Register}/>
                <Route path='/blog' component={Blog}/>
                <Route path="/sobre" component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
