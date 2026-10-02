const cliente = "Bruno Siqueira"
const opcaoMenu = 1
const quantidade = 4
const formaPagamento = "pix"
const statusPedido = "cancelado"


let prato

switch (opcaoMenu) {
  case 1:
    prato = "Sushi"
    break

  case 2:
    prato = "Temaki"
    break

  case 3:
    prato = "Yakisoba"
    break

  case 4:
    prato = "Chá Gelado"
    break

  default:
    prato = "Opção inválida"
}


let precoUnitario

switch (opcaoMenu) {
  case 1:
    precoUnitario = 32
    break

  case 2:
    precoUnitario = 24
    break

  case 3:
    precoUnitario = 28
    break

  case 4:
    precoUnitario = 9
    break

  default:
    precoUnitario = 0
}


const subtotal = precoUnitario * quantidade


const freteStatus = subtotal >= 100 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 100 ? 0 : 8


let pagamentoMensagem

switch (formaPagamento) {
  case "pix":
    pagamentoMensagem = "Pagamento via PIX"
    break

  case "cartao":
    pagamentoMensagem = "Pagamento via cartão"
    break

  case "dinheiro":
    pagamentoMensagem = "Pagamento em dinheiro"
    break

  default:
    pagamentoMensagem = "Forma de pagamento inválida"
}


let descontoPercentual

switch (formaPagamento) {
  case "pix":
  case "dinheiro":
    descontoPercentual = 15
    break

  case "cartao":
    descontoPercentual = 0
    break

  default:
    descontoPercentual = 0
}


const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete


let statusMensagem

switch (statusPedido) {
  case "pendente":
    statusMensagem = "Aguardando pagamento"
    break

  case "aprovado":
    statusMensagem = "Pedido em preparo"
    break

  case "enviado":
    statusMensagem = "Pedido a caminho"
    break

  case "cancelado":
    statusMensagem = "Pedido cancelado"
    break

  default:
    statusMensagem = "Status desconhecido"
}


const resumo = `
========================================
         RESUMO DO PEDIDO
========================================
Cliente: ${cliente}
Item: ${prato} (qtd: ${quantidade})
Subtotal: R$ ${subtotal}
Situação do Frete: ${freteStatus} (R$ ${frete})
Forma de Pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto}
----------------------------------------
Total: R$ ${total}
Status do Pedido: ${statusMensagem}
========================================
`

console.log(resumo)


module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}