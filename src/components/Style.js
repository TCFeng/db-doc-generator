import styled from 'styled-components';
import { Row } from '~~atoms/';

export const Container = styled.div`
  .ant-row-flex {
    padding-bottom: 50px;
  }
`;

export const Header = styled(Row)`
  display: flex;
  align-items: center;
  background-color: #0092ff;
  width: 100%;
  padding: 20px;
  height: 150px;
  font-size: 40px;
  color: white;
`;

export const Content = styled(Row)`
  margin: 20px;
  padding: 15px 30px;
`;