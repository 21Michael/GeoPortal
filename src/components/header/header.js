import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import Logo from './components/logo/logo.js'
import Nav from './components/nav/nav.js'
import Form from './components/form/form.js'
import SignButtons from './components/signButtons/signButtons.js'

const Header = (props) => (
    <header className={classes.header}>
        <div className={classes.header__wrapper}>
	        <Logo/>
	        <Nav/>
	        <Form/>
	        <SignButtons/>
        </div>
    </header>
)

Header.propTypes = {
    //products: PropTypes.array
}

export default Header;