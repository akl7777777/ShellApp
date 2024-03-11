import { app, BrowserWindow } from 'electron';
import { appConfig } from './config';
import dotenv from 'dotenv';
dotenv.config();

appConfig.url = process.env.APP_URL || '';

function createWindow(): void {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(appConfig.url);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
