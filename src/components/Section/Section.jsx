import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionHeader } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
