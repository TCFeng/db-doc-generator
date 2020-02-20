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
        <Row type="flex">
          <Col span={5}><Label>Engine</Label></Col>
          <Col span={19}><Label>123</Label></Col>
        </Row>
      </Form.Main>
    </Style.Container>
  );
};

export default hot(Main);
