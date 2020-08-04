import React from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import validator from 'validator'
import { shallowEqual, useSelector } from 'react-redux'
import { onChangeInput } from '../../../../store/actions/header.js'
import Input from '../../../UI/input/input.js'

const Form = (props) => {
    const input = useSelector(state => state.header.search);

    return <form className={classes.header__search}>
                <div className={classes.search__wrapper}>
                    <Input 
                        input={input}
                        data-valid = {input.valid}
	                    type={input.type} 
	                    name={input.name} 
	                    placeholder={input.placeholder}
	                    value={input.value}
	                    onChange = {onChangeInput}
                    />
                    <button className={classes.search__submit} disabled={input.disabled}>
                     	<FontAwesomeIcon icon='search' />
                    </button>
                </div>
            </form>;
}

Form.propTypes = {
    //products: PropTypes.array
}

export default Form;