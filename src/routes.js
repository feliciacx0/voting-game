import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Game from './containers/Game';



export default function Routes() {

    return(

        <Router>
            <div className='routes'>
                <Switch>
                    <Route exact path='/' component={Game}></Route>
                </Switch>
            </div>
        </Router>
    );
}
