import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Form, Row, Col, Label, Input, Button } from '~~atoms/';

import * as Style from './Style';

const electron = window.require('electron');
const fs = window.require('fs');

const {
  ipcRenderer, shell, remote, desktopCapturer, screen, clipboard
} = electron;
const { app, dialog } = remote;


const Main = () => {

  return (
    <Style.Container>
      <Form.Main>
        <Style.Header>
          Postgres Doc Generator
        </Style.Header>
        <Style.Content>
          <Row>
            <Col span={6}><Label>DB Url</Label></Col>
            <Col span={18}><Input placeholder="127.0.0.1"/></Col>
          </Row>
          <Row>
            <Col span={6}><Label>PORT</Label></Col>
            <Col span={10}><Input placeholder="5432"/></Col>
          </Row>
          <Row>
            <Col span={6}><Label>DB NAME</Label></Col>
            <Col span={10}><Input placeholder="Database Name"/></Col>
          </Row>
          <Row>
            <Col span={6}><Label>USER</Label></Col>
            <Col span={10}><Input placeholder="User Account"/></Col>
          </Row>
          <Row>
            <Col span={6}><Label>PASSWORD</Label></Col>
            <Col span={10}><Input.Password placeholder="Password"/></Col>
          </Row>
          <Row>
            <Col span={20}></Col>
            <Col span={4}><Button type="primary">Generate</Button></Col>
          </Row>
        </Style.Content>
      </Form.Main>
    </Style.Container>
  );
};

export default hot(Main);
