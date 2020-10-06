import styled from 'styled-components';

const WarningText = styled.div`
  color: red;
  text-align: ${p => p.align};
  width: 100%;
  font-size: ${p => p.fontSize};
  margin: 2px 0px;
`;

WarningText.defaultProps = {
  align: 'left',
  fontSize: '1rem',
};

export default WarningText;
