import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';

const ExternalLink = ({ href, text }) => (
  <Link rel="noopener nofollow" target="_blank" color="teal.500" href={href}>
    {text}
  </Link>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ExternalLink;
