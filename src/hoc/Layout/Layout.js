import React, { Component } from 'react'
import './reset.css'
import classes from './Layout.module.scss'

import Error404 from '../../containers/errorSection/error404.js';
import ChooseRiver from '../../containers/chooseRiver/chooseRiver.js'
import Main from '../../containers/main/main.js'
import RiverDiagram from '../../containers/riverDiagram/riverDiagram.js'

import { Switch, Route } from 'react-router-dom'

function Layout() {
    return (
        <div className={classes.wrapper}>
                <Switch>
                    <Route exact path='/'>  
                        <Main />
                    </Route>
                     <Route exact path='/chooseRiver'>  
                        <ChooseRiver />
                    </Route>
                    <Route exact path='/riverDiagram'>  
                        <RiverDiagram />
                    </Route>
                    <Route> 
                        <Error404 />
                    </Route>
                </Switch> 
            </div>
    )
}

export default Layout;