import styled from 'styled-components';
import { Row } from '~~atoms/';

export const Container = styled.div`
  padding: 20px;

  .ant-row-flex {
    padding-bottom: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #0092ff;
  width: 100%;
  padding: 20px;
  height: 150px;
  font-size: 40px;
  color: white;

  &>div {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 35px 50px;

  &>div {
    margin-bottom: 24px;
  }
`;

export const Footer = styled.div`
  
`;