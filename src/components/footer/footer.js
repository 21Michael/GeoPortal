import React from 'react';
import PropTypes from 'prop-types';
import classes from './footer.module.scss';
import Information from './components/information/information.js'
import SocialNetWorks from './components/socialNetWorks/socialNetWorks.js'

const Footer = (props) => (
    <footer>
    	<Information/>
    	<SocialNetWorks/>
    </footer>
)

Footer.propTypes = {
   // products: PropTypes.array
}

export default Footer;