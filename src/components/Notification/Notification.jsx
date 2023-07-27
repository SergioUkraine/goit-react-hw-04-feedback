import React, { Component } from 'react';
import './Notification.scss';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return <p className="notification">{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
