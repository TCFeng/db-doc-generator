import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Form, Input, Button } from '~~atoms/';

// import * as Style from './Style';

const electron = window.require('electron');
const fs = window.require('fs');


const {
  ipcRenderer, shell, remote, desktopCapturer, screen, clipboard
} = electron;
const { app, dialog } = remote;


const Main = () => {

  return (
    <Input placeholder="Basic usage 1" />
  );
};

export default hot(Main);
