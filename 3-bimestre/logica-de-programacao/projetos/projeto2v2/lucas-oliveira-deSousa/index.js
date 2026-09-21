const cliente = "Diego Barbosa"
const servico = "Corte e Barba Completo"
const valorUnidade = 100
const periodo = 5
const quantidadeReservada = 3
const barbeirosDisponiveis = 2
const valorPago = 300

const valorBase = valorUnidade * periodo

let disponibilidadeStatus

if (quantidadeReservada <= barbeirosDisponiveis) {
    disponibilidadeStatus = "Horário disponível"
} else {
    disponibilidadeStatus = "Horário indisponível"
}

let descontoStatus
let valorDesconto

if (periodo >= 3) {
    descontoStatus = "Desconto de pacote longo aplicado"
    valorDesconto = 30
} else {
    descontoStatus = "Sem desconto de pacote longo"
    valorDesconto = 0
}

const valorFinal = valorBase - valorDesconto

let pagamentoStatus

if (valorPago >= valorFinal) {
    pagamentoStatus = "Agendamento quitado"
} else {
    pagamentoStatus = "Agendamento com saldo pendente"
}

let saldoDevedor

if (valorPago >= valorFinal) {
    saldoDevedor = 0
} else {
    saldoDevedor = valorFinal - valorPago
}

let statusAgendamento

if (quantidadeReservada <= barbeirosDisponiveis) {
    if (valorPago >= valorFinal) {
        statusAgendamento = "Agendamento confirmado"
    } else {
        statusAgendamento = "Agendamento confirmado com saldo pendente"
    }
} else {
    statusAgendamento = "Agendamento não pode ser confirmado: horário indisponível"
}

const resumo = `
Cliente: ${cliente}
Serviço: ${servico}
Valor por hora: R$ ${valorUnidade}
Duração: ${periodo} horas
Barbeiros necessários: ${quantidadeReservada}
Barbeiros disponíveis: ${barbeirosDisponiveis}
Valor base: R$ ${valorBase}
${descontoStatus}
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
${pagamentoStatus}
Saldo devedor: R$ ${saldoDevedor}
Status: ${statusAgendamento}
`

module.exports = {
    cliente,
    servico,
    valorUnidade,
    periodo,
    quantidadeReservada,
    barbeirosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAgendamento,
    resumo
}
