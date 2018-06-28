import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Logo = ({ text }) => <h1 className="Logo">{text}</h1>;

Logo.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Logo;
