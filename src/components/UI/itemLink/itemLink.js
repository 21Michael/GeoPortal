import React from 'react';
import PropTypes from 'prop-types';
import classes from './itemLink.module.scss';
import { NavLink } from 'react-router-dom'

const Item = (props) => {
    return <li className={classes.nav__item}>
                <NavLink exact to={props.to}>
                    {props.text}
                </NavLink>
            </li>
}

Item.propTypes = {
    //products: PropTypes.array
}

export default Item;