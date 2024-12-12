import { ipcMain } from 'electron'

export function produtoRouter() {
  const produtos = []

  ipcMain.handle('produto:create', (event, arg) => {
    produtos.push(arg)
  })
  ipcMain.handle('produto:getByCodigo', (event, arg) => {
    const produto = produtos.find((produto) => produto.codigo === arg)
    return {
      codigo: produto.codigo,
      nome: produto.nome,
      preco: produto.preco
    }
  })
  ipcMain.handle('produto:finalizarCompra', (event, arg) => {
    console.log(arg)
  })
}
