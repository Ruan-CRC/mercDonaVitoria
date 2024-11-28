const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  produto: {
    create: async (produto) => {
      return ipcRenderer.invoke('produto:create', produto)
    },
    update: async (produto) => {
      return ipcRenderer.invoke('produto:update', produto)
    }
  },
  estoque: {
    create: async (estoque) => {
      return ipcRenderer.invoke('estoque:create', estoque)
    },
    adicionarProduto: async (estoque) => {
      return ipcRenderer.invoke('estoque:adicionarProduto', estoque)
    },
    removerProduto: async (estoque) => {
      return ipcRenderer.invoke('estoque:removerProduto', estoque)
    }
  },
  caixa: {
    create: async (caixa) => {
      return ipcRenderer.invoke('caixa:create', caixa)
    }
  }
})
