import React, { useReducer } from 'react';
import { hot } from 'react-hot-loader/root';
import { Form, Row, Col, Label, Input, InputNumber, Button } from '~~atoms/';
import { DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';

import * as Style from './Style';

const electron = window.require('electron');
const fs = window.require('fs');

const {
  ipcRenderer, shell, remote, desktopCapturer, screen, clipboard
} = electron;



const Main = () => {

  const [dbData, setDbData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      url: '',
      port: 0,
      dbName: '',
      user: '',
      password: '',
    }
  );

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setDbData({ [name]: newValue });
  }

  const genDocument = (data) => {
    console.log('save', data);
    console.log('dbData', dbData);
  }

  return (
    <Style.Container>
      <Form>
        <Style.Header>
          <Row>
            <Col span={3}><DatabaseOutlined /></Col>
            <Col span={21}>Postgres Doc Generator</Col>
          </Row>
        </Style.Header>
        <Style.Content>
          <Row>
            <Col span={6}><Label>DB Url</Label></Col>
            <Col span={18}><Input name='url' placeholder="127.0.0.1" onChange={handleChange} value={dbData.url} /></Col>
          </Row>
          <Row>
            <Col span={6}><Label>Port</Label></Col>
            {/* <Col span={10}><InputNumber min={1} max={65535} defaultValue={5432} name='port' placeholder="5432" onChange={handleChange} value={dbData.port} /></Col> */}
            <Col span={10}><Input name='port' type="number" min="1" max="65535" placeholder="5432" onChange={handleChange} value={dbData.port} /></Col>
          </Row>
          <Row>
            <Col span={6}><Label>DB Name</Label></Col>
            <Col span={10}><Input name='dbName' placeholder="Database Name" onChange={handleChange} value={dbData.dbName} /></Col>
          </Row>
          <Row>
            <Col span={6}><Label>User</Label></Col>
            <Col span={10}><Input name='user' placeholder="User Account" onChange={handleChange} value={dbData.user} /></Col>
          </Row>
          <Row>
            <Col span={6}><Label>Password</Label></Col>
            <Col span={10}><Input.Password name='password' placeholder="Password" onChange={handleChange} value={dbData.password} /></Col>
          </Row>
        </Style.Content>
        <Style.Footer>
          <Button type="primary" icon={<DownloadOutlined />} size='large' onClick={genDocument}>
            Download
          </Button>
        </Style.Footer>
      </Form>
    </Style.Container>
  );
};

export default hot(Main);
