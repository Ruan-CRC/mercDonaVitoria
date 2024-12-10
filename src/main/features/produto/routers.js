import { ipcMain } from 'electron'

export function produtoRouter() {
  ipcMain.handle('produto:create', (event, arg) => {
    console.log([event, arg])
    const newProdutc = { ...arg, id: 1 }
    return newProdutc
  })
  ipcMain.handle('produto:getByCodigo', (event, arg) => {
    return {
      codigo: arg,
      nome: 'Produto 1',
      precoUnitario: 100
    }
  })
}
