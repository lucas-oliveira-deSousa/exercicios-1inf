const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Digite a quantidade de dias da semana: "))
const metaDiaria = Number(prompt("Digite a meta de vendas diaria: "))
const metaSemanal = Number(prompt("Digite a meta de vendas da semana: "))

let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const venda = Number(prompt(`Venda do dia ${dia}: `))

    totalVendido = totalVendido + venda

    if (venda >= metaDiaria) {
        diasAcimaDaMeta++
    }

    if (venda > melhorDia) {
        melhorDia = venda
    }
}

const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana = totalVendido >= metaSemanal
    ? "Meta semanal atingida"
    : "Meta semanal não atingida"

const resumo = `
===== RELATORIO DE VENDAS =====
Total vendido: R$ ${totalVendido}
Media por dia: R$ ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: R$ ${melhorDia}
Situacao da semana: ${situacaoSemana}
`

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}