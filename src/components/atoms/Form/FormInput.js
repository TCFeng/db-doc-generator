/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Input, WarningText } from '~~atoms/';
// import { FormContext } from './Main';

const Container = styled.div`
  .errorInput {
    border: 2px solid #FF0000;
  }
  .error {
    color: #FF0000;
  }
`;

const FormInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Container>
      {
      (touched[field.name] && errors[field.name]) ? (
        <React.Fragment>
          <Input className="errorInput" type="text" {...field} {...props} />
          <WarningText>{errors[field.name] ? t(errors[field.name].key, errors[field.name].data) : ''}</WarningText>
        </React.Fragment>
      ) : (
        <Input type="text" {...field} {...props} />
      )
      }
    </Container>
  );
};

export default FormInput;
