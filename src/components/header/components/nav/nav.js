import React from 'react';
import PropTypes from 'prop-types';
import classes from './nav.module.scss';
import Item from '../../../UI/itemLink/itemLink.js'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

const Nav = (props) => {
    const navList = useSelector(state=> state.header.navList, shallowEqual);

    return <nav className= {classes.header__nav}>
                <ul className={classes.nav__list}>
                    {navList.map( (el,i) => <Item text={el.text} to={el.to} key={i}/>)}
                </ul>
            </nav>;
}

Nav.propTypes = {
    //products: PropTypes.array
}

export default Nav;