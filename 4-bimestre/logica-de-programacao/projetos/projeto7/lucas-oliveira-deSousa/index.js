const prompt = require("prompt-sync")()

let limiteEstoqueBaixo = Number(prompt("Digite o limite de estoque baixo: "))

let quantidade = Number(prompt("Digite a quantidade de produtos: "))

let catalogo = []

for (let i = 0; i < quantidade; i++) {
    let nome = prompt("Digite o nome do produto: ")
    let preco = Number(prompt("Digite o preço do produto: "))
    let estoque = Number(prompt("Digite o estoque do produto: "))

    catalogo.push({
        nome: nome,
        preco: preco,
        estoque: estoque
    })
}

console.log("Catálogo:")

for (let i = 0; i < catalogo.length; i++) {
    console.log(`${i + 1}. ${catalogo[i].nome} - preço ${catalogo[i].preco} - estoque ${catalogo[i].estoque}`)
}

console.log(`Limite de estoque baixo: ${limiteEstoqueBaixo}`)

let produtoMaisCaro = catalogo[0]

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].preco > produtoMaisCaro.preco) {
        produtoMaisCaro = catalogo[i]
    }
}

produtoMaisCaro = produtoMaisCaro.nome

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal = estoqueTotal + catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

let nomeReajuste = prompt("Reajuste - nome do produto: ")
let aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeReajuste) {
        catalogo[i].preco = catalogo[i].preco + aumento
    }
}

let resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}