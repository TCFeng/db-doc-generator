// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const PgDocService = require('../src/service/PgDocService');

let win;

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:8080/`
  : `file://${path.join(__dirname, '../build/index.html')}`;

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 650,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(winURL);

  win.on('closed', () => {
    win = null;
  });

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const sleep = milliseconds => {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

ipcMain.on('save-data', (event, data) => {

  //PgDocService.getDoc(data);
  console.log('1111111111');
  sleep(3000);
  event.sender.send('asynchronous-reply', '<!DOCTYPE html><html><head></head><body>Hello World</body></html>')
});