import {
  app,
  BrowserWindow,
  Notification,
} from "electron";
import path from "node:path";
import fetch from "node-fetch";

process.env.DIST = path.join(
  __dirname,
  "../dist"
);
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL =
  process.env["VITE_DEV_SERVER_URL"];

async function fetchAndShowNotification() {
  try {
    const response = await fetch(
      "https://dummyjson.com/quotes/random"
    );
    const data = (await response.json()) as {
      quote: string;
      author: string;
    };

    const quoteText = data.quote;
    const author = data.author;

    // Create a notification with the quote and author
    const notification = new Notification({
      title: "Welcome to Your Todo App",
      body: `Here's a random quote for you:\n"${quoteText}" - ${author}`,
    });

    notification.show();
  } catch (error) {
    console.error(
      "Error fetching or displaying the notification:",
      error
    );
  }
}

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(
      process.env.VITE_PUBLIC,
      "electron-vite.svg"
    ),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send(
      "main-process-message",
      new Date().toLocaleString()
    );
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(
      path.join(process.env.DIST, "index.html")
    );
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  if (
    BrowserWindow.getAllWindows().length === 0
  ) {
    createWindow();
  }
});

app.whenReady().then(() => {
  createWindow();
  fetchAndShowNotification();
});
