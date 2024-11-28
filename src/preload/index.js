const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('produtos', {
  create: (arg) => ipcRenderer.invoke('produtos:create', arg),
  update: (arg) => ipcRenderer.invoke('update', arg),
  list: (arg) => ipcRenderer.invoke('list', arg)
})
