import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FirstComponent from './FirstComponent';
import Avatar from './Avatar';
import Menu from './Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render( ( 
    <BrowserRouter>       
            <div>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Avatar} />
                    <Route path="/about" component={Avatar} />
                    <Route path="/contact" component={FirstComponent} />
                </Switch>
            </div>        
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
