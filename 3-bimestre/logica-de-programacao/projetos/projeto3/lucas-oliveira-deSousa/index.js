
const nome = "Lucas Oliveira"
const idade = 17
const categoria = "comum"
const possuiReserva = true
const bloqueado = false
const valorReserva = 60
const valorPago = 70

let idadeStatus

if (idade >= 18) {
    idadeStatus = ("Idade permitida")
} else {
    idadeStatus = ("Idade não permitida")
}

let nivelAcesso

if (categoria === "mestre-de-jogo" || categoria === "coordenador") {
    nivelAcesso = ("Acesso administrativo liberado")
} else {
    nivelAcesso = ("Acesso comum")
}

let acessoStatus

if (idade >= 18 && possuiReserva && !bloqueado) {
    acessoStatus = ("Acesso à sala liberado")
} else {
    acessoStatus = ("Acesso à sala negado")
}

let pagamentoStatus

if (valorPago >= valorReserva) {
    pagamentoStatus = ("Pagamento aprovado")
} else {
    pagamentoStatus = ("Pagamento insuficiente")
}

let troco

if (valorPago >= valorReserva) {
    troco = valorPago - valorReserva
} else {
    troco = 0
}

let statusPartida

if (
    acessoStatus === "Acesso à sala liberado" &&
    pagamentoStatus === "Pagamento aprovado"
) {
    statusPartida = ("Partida confirmada")
} else {
    statusPartida = ("Partida não confirmada")
}

const resumo = `
=== ESCAPE ROOM ENIGMA ===

Jogador: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}

Valor da reserva: R$ ${valorReserva}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}

Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusPartida}
`

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiReserva,
    bloqueado,
    valorReserva,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusPartida,
    resumo
}
