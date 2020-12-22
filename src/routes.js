import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Blog from './Pages/Blog';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/cadastro" component={Register}/>
                <Route path='/blog' component={Blog}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
