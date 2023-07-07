import React, { Component } from 'react'
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import classes from './main.module.scss'
import Title from '../../components/main/title/title.js'
import BasinMap from '../../components/main/map/map.js'
import Header from '../../components/header/header.js'
import Footer from '../../components/footer/footer.js'

function Main(props) {
	const state = useSelector(state=> state.main, shallowEqual);

    return (
        <ErrorBoundary>
        <div className ={classes.wrapper}>
	        <Header/>
            {/*<main>
            	<Title/>
            	<BasinMap/>
            </main>
            <Footer/>*/}
        </div>
        </ErrorBoundary>
    )
}



export default Main;