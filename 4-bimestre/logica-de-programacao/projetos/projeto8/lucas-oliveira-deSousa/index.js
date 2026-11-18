const prompt = require("prompt-sync")()
let precoUnitario = Number(prompt("Digite o preço unitário: "))
let quantidade = Number(prompt("Digite a quantidade: "))
let formaPagamento = prompt("Digite a forma de pagamento: ")

const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade
}

function calcularFrete(subtotal) {
    if (subtotal >= 100) {
        return 0
    } else {
        return 10
    }
}

function calcularDesconto(subtotal, formaPagamento) {
    let percentual = 0

    switch (formaPagamento) {
        case "pix":
            percentual = 5
            break

        case "dinheiro":
            percentual = 5
            break

        case "cartao":
            percentual = 0
            break
    }

    return subtotal * percentual / 100
}

function calcularTotal(preco, quantidade, formaPagamento) {
    let subtotal = calcularSubtotal(preco, quantidade)
    let frete = calcularFrete(subtotal)
    let desconto = calcularDesconto(subtotal, formaPagamento)

    return subtotal - desconto + frete
}

let subtotal = calcularSubtotal(precoUnitario, quantidade)
let frete = calcularFrete(subtotal)
let desconto = calcularDesconto(subtotal, formaPagamento)
let total = calcularTotal(precoUnitario, quantidade, formaPagamento)

let resumo = `
----- RESUMO DO PEDIDO -----
Subtotal: ${subtotal}
Frete: ${frete}
Desconto: ${desconto}
Total: ${total}
`

console.log(resumo)

module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}
