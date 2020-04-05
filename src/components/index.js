import React, { useState, useReducer } from 'react';
import { hot } from 'react-hot-loader/root';
import { Form, Row, Col, Label, Input, Spin, Button, Alert } from '~~atoms/';
import { DatabaseOutlined, DownloadOutlined } from '@ant-design/icons';

import * as Style from './Style';

const electron = window.require('electron');
const fs = window.require('fs');

const {
  ipcRenderer, shell, remote, desktopCapturer, screen, clipboard
} = electron;



const Main = () => {
  const [loadStatus, setLoadStatus] = useState({isLoading : false});
  const [dbData, setDbData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      host: '127.0.0.1',
      port: 5432,
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

  const myFunction = i => {
    (function doStuff() {
      console.log(i);
      i -= 1;
  
      if (i >= 0) {
        setTimeout(doStuff, 5000);
      }
    }());
  }

  const genDocument = (data) => {
    try {
      setLoadStatus({isLoading : true});
      // 先等三秒測試
      myFunction(3000);
      // ipcRenderer.send('save-data', dbData);
    } catch (err) {
      // setError(err.message);
      throw err;
    } finally {
      setLoadStatus({isLoading : false});
    }

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
        <Spin spinning={loadStatus.isLoading}>
          <Style.Content>
            <Row>
              <Col span={6}><Label>DB Host</Label></Col>
              <Col span={18}><Input name='host' placeholder="127.0.0.1" onChange={handleChange} value={dbData.host} /></Col>
            </Row>
            <Row>
              <Col span={6}><Label>Port</Label></Col>
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
        </Spin>
        <Style.Footer>
          <Row>
            <Col span={1}></Col>
            <Col span={16}><Alert message="Loading..." type="info" /></Col>
            <Col span={2}></Col>
            <Col span={4}>
              <Button type="primary" icon={<DownloadOutlined />} size='large' onClick={genDocument}>
                Download
              </Button>
            </Col>
          </Row>
        </Style.Footer>
      </Form>
    </Style.Container>
  );
};

export default hot(Main);
