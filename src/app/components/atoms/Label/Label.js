import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as Colors from '~~styles/color';

const Label = styled.div`
  text-align: ${p => p.align};
  padding-top: 5px;
  font-size: 14px;
  color: ${Colors.black_1};
`;

const RequiredStyle = styled.span`
  font-size: 20px;
  padding-left: 5px;
  color: ${Colors.green_5};
`;

const LabelComp = ({ children, required, ...props }) => (
  <Label {...props}>
    {children}
    {required ? <RequiredStyle>*</RequiredStyle> : null}
  </Label>
);

LabelComp.propTypes = {
  required: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

LabelComp.defaultProps = {
  required: false,
  align: 'left',
};

export default LabelComp;
