import React, { Component } from 'react';
import './Section.scss';
import classNames from 'classnames';

class Section extends Component {
  render() {
    const { title, children, customClassName} = this.props;
    const sectionClassName = classNames(customClassName, 'section');

    return (
      <div className={ sectionClassName }>
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
