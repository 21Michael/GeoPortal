import React, { Component } from 'react'
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './chooseRiver.module.scss'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

function ChooseRiver(props) {
	const state = useSelector(state=> state.main, shallowEqual);

    return (
        <ErrorBoundary>
        <div className ={classes.wrapper}>
           chooseRiver
        </div>
        </ErrorBoundary>
    )
}



export default ChooseRiver;