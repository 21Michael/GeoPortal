import React, { Component } from 'react'
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './riverDiagram.module.scss'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

function RiverDiagram(props) {
	const state = useSelector(state=> state.main, shallowEqual);

    return (
        <ErrorBoundary>
        <div className ={classes.wrapper}>
           
        </div>
        </ErrorBoundary>
    )
}



export default RiverDiagram;