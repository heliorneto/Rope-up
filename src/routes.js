import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import Capture from './Pages/Capture';
import Blog from './Pages/Blog';
import BlogSearch from './Pages/BlogSearch/blogSeach';
import Sobre from './Pages/Sobre';
import Artigos from './Pages/Artigos/artigos';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact path="/" to="/home"/>
                <Route path="/home" component={Home}/>
                <Route path="/contato" component={Capture}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/blog/search' component={BlogSearch}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/blog/artigos/:id" component={Artigos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
