const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * quantidade
let descontoPercentual = 0

if (subtotal >= 1000) {
    descontoPercentual = 10
}

const valorDesconto = subtotal * descontoPercentual / 100
const valorFinal = subtotal - valorDesconto

let troco = "Aguardando"
let statusPedido = "Aguardando"
let pagamentoStatus = "Aguardando"
let estoqueDisponivel = "Aguardando"

if (estoque >= quantidade){
    estoqueDisponivel = "Estoque disponível"
    statusPedido = "Pedido disponível para finalização"
} else{
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
    estoqueDisponivel = "Indisponível"
}

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
    troco = valorPago - valorFinal
    
} else {
    pagamentoStatus = "Pagamento insuficiente"
    troco = 0
}

const resumo = `Cliente: ${cliente}
Produto: ${produto}
Preço: R$${preco}
Quantidade: ${quantidade}
Estoque: ${estoque}
Valor Pago: R$${valorPago}
Desconto Percentual: ${descontoPercentual}%
Valor Desconto: R$ ${valorDesconto}
Valor Final R$ ${valorFinal}
Troco R$ ${troco}
Pagamento: ${pagamentoStatus}
Situação do estoque: ${estoqueDisponivel}
Status do pedido: ${statusPedido}`

console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}
