const { app, BrowserWindow } = require("electron")
const path = require("path")

function createNewWindow() {
  var window = new BrowserWindow({
    height: 500,
    width: 750,
    darkTheme: false,
    title: "Notepad",
    icon: path.join(__dirname, "assets", "ico", "notepad.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: false 
    }
  })

  window.loadFile(path.join(__dirname, "index.html"))
}

app.whenReady()
  .then(() => {
    createNewWindow()

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) newWindow()
    })
  })

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})
