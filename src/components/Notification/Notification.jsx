import React, { Component } from 'react';
import './Notification.scss';

class Notification extends Component {
  render() {
    return <p className="notification">{this.props.message}</p>;
  }
}

export default Notification;
