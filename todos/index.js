const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('start', () => {
  mainWindow = new BrowserWindow({});
});
