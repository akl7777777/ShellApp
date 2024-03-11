import {app, BrowserWindow} from 'electron';
import dotenv from 'dotenv';
import * as path from "path";
const envPath = path.join(app.getAppPath(), '.env');
dotenv.config({ path: envPath });

const appUrl = process.env.APP_URL || '';


function createWindow(): void {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(appUrl);
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
