const {app, BrowserWindow} = require('electron')

let win

function createWindow(){
    win = new BrowserWindow({width: 600, height: 600, backgroundColor: "#000000", show: false, icon: "FMU_32x32.png"})
    win.loadFile('app.html')
    win.once('ready-to-show', () => {
        win.show()
      })
}
app.on('ready', createWindow)