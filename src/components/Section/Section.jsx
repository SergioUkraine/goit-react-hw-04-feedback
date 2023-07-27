import React, { Component } from 'react';
import './Section.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children, customClassName } = this.props;
    const sectionClassName = classNames(customClassName, 'section');

    return (
      <div className={sectionClassName}>
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  customClassName: PropTypes.string,
};

export default Section;
