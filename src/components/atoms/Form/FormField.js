import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { WarningText } from '~~atoms/';

const Container = styled.div`
  .errorInput {
    border: 2px solid #FF0000;
    border-radius: 6px;

    .ant-input:hover {
      border: 1px solid #FF0000;
    }
  }
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const ErrorMessageComp = ({ name, form }) => {
  const { t } = useTranslation();
  let errorObj = {};
  let errorTouched = false;
  try {
    // eslint-disable-next-line no-eval
    errorObj = eval(`form.errors.${name}`);
    // eslint-disable-next-line no-eval
    errorTouched = eval(`form.touched.${name}`);
  } catch (err) {
    errorObj = {};
    errorTouched = false;
  }

  const error = (errorObj && errorTouched)
    ? t(errorObj.key, errorObj.data)
    : '';
  return (
    <WarningText align="left">
      {/* {error && <Icon component={iconWarning} size="sm" cursor="initial" />} */}
      {error}
    </WarningText>
  );
};

const FormField = ({
  field,
  form,
  formComponent,
}) => {
  let Field;
  if (typeof formComponent === 'function') {
    Field = formComponent(field);
  } else {
    Field = React.cloneElement(formComponent, {
      ...field,
      ...formComponent.props,
      onBlur: () => { },
      onFocus: () => {
        form.setFieldTouched(field.name);
      },
    }, formComponent.children);
  }

  const isError = (name) => {
    let errorObj = {};
    let errorTouched = false;
    try {
      // eslint-disable-next-line no-eval
      errorObj = eval(`form.errors.${name}`);
      // eslint-disable-next-line no-eval
      errorTouched = eval(`form.touched.${name}`);
    } catch (err) {
      errorObj = {};
      errorTouched = false;
    }
    return (errorObj && errorTouched);
  };

  return (
    <Container>
      <div className={isError(field.name, form) ? 'errorInput' : ''}>
        {Field}
      </div>
      <ErrorMessageComp name={field.name} form={form} />
    </Container>
  );
};

FormField.propTypes = {
  field: PropTypes.shape().isRequired,
  form: PropTypes.shape().isRequired,
  formComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default FormField;
