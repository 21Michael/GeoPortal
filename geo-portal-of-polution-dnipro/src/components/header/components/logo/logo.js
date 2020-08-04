import React from 'react';
import PropTypes from 'prop-types';
import classes from './logo.module.scss';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

const Logo = (props) => {
	const title = useSelector(state=> state.header.title, shallowEqual);

    return <div className={classes.header__logo}>
	            <p className={classes.logo__title}>
	               {title}
	            </p>
	            <a className={classes.logo__link} href="">
	                <img src="images/Flag_of_Ukraine_(with_coat_of_arms_2).svg.png"/>
	            </a>
            </div>;
}

Logo.propTypes = {
    //products: PropTypes.array
}

export default Logo;