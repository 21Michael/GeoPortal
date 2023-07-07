import React from 'react';
import classes from './input.module.scss'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

const Input = (props) => {
    const dispatch = useDispatch();
    return <input className={classes.input}
     			data-valid = {props['data-valid']}
		    	value = {props.value}
		    	file = {props.file}
			    onChange = {
			    	evt => { 
				    	let file = evt.target.files ? evt.target.files[0]: null;  
				    	dispatch(props.onChange(props.input, evt.target.value, file ),[dispatch]);
				    } 
			    }
			    min={props.min}
			    type = {props.type}
			    name = {props.name}  
			    placeholder = {props.placeholder}   
			    required = {props.required}  
			/>

}

Input.propTypes = {
    value: PropTypes.string,
    file: PropTypes.object,
    validation: PropTypes.object,
    min: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func
}

export default Input;