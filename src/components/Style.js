import styled from 'styled-components';
import { Row } from '~~atoms/';

export const Container = styled.div`
  .ant-row-flex {
    padding-bottom: 15px;
  }
`;

export const Header = styled(Row)`
  background-color: #0092ff;
  width: 97%;
  margin: 20px 20px;
  padding: 3px 16px;
  cursor: pointer;
  height: 150px;
`;

export const Content = styled(Row)`
  width: 97%;
  margin: 20px;
  padding: 30px;
`;