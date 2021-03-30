"use strict";

const React = require('react');
const { Link } = require('react-router-dom');
const { Tooltip } = require('@material-ui/core')
require('./style.css');

function get_pathname(reference) {
  return { pathname: reference };
}

const Term = ({children, reference, popup}) => {
  return (
    <Tooltip title={<span className='popup'>{popup}</span>} arrow={true}>
      <Link to={ get_pathname(reference) }>
        <span className='term'>{children}</span>
      </Link>
    </Tooltip>
  );
};

module.exports = { Term };
