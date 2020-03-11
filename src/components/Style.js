import styled from 'styled-components';
import { Row } from '~~atoms/';

export const Container = styled.div`
  padding: 20px;

  .ant-row-flex {
    padding-bottom: 50px;
  }
`;

export const Header = styled(Row)`
  margin: 0px auto 0px;
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
  padding: 35px 50px;

  &>div {
    margin-bottom: 24px;
  }
`;