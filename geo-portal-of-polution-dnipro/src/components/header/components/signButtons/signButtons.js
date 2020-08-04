import React from 'react';
import PropTypes from 'prop-types';
import classes from './signButtons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const SignButtons = (props) => {
    const signInButton = useSelector(state => state.header.signButtons.signIn, shallowEqual);
    const signOutButton = useSelector(state => state.header.signButtons.signOut, shallowEqual);

    return <div className= {classes.header__sign}>
                <div className={classes.sign__wrapper}>
                    <NavLink exact to={signInButton.to} className={classes.sign__in}>
                        <FontAwesomeIcon icon={signInButton.icon} />
                    </NavLink>
                    <button className={classes.sign__out} disabled={signOutButton.disabled}>
                        <FontAwesomeIcon icon={signOutButton.icon} />
                    </button>
                </div>
            </div>
}

SignButtons.propTypes = {
    //products: PropTypes.array
}

export default SignButtons;