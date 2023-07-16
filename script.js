let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 
let placar = 0 

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')


let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const p0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const p1 = {
    pergunta     : "Quem é o dono da frase Rumo a erudicao?",
    alternativaA : "Edson Viegas",
    alternativaB : "Tito Nelson",
    alternativaC : "Lucas Pázito",
    correta      : "Lucas Pázito",
}

const p2 = {
    pergunta     : "quem é o lider do povo II12B?",
    alternativaA : "Mauro Dennis",
    alternativaB : "King Dacis",
    alternativaC : "Miguel Deep",
    correta      : "King Dacis",
}

const p3 = {
    pergunta     : "Quem é o mulato da II12B?",
    alternativaA : "Rosário",
    alternativaB : "Ângelo",
    alternativaC : "Nangayafina",
    correta      : "Ângelo",
}

const p4 = {
    pergunta     : "Em que ano surgio a COVID-19?",
    alternativaA : "2000",
    alternativaB : "2006",
    alternativaC : "2019",
    correta      : "2019",
}

const p5 = {
    pergunta     : "Qual é a linguagem considerada pilar da web?",
    alternativaA : "Java",
    alternativaB : "Python",
    alternativaC : "HTML + CSS +JS",
    correta      : "HTML + CSS +JS",
}

// 
// object array com todas as perguntas
const questoes = [p0, p1, p2, p3, p4, p5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = p1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = p1.numQuestao
pergunta.textContent   = p1.pergunta
a.textContent = p1.alternativaA
b.textContent = p1.alternativaB
c.textContent = p1.alternativaC

// configurando o valor inicial
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// montar as questoes
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent


    let certa = questoes[numeroDaQuestao].correta


    if(respostaEscolhida == certa) {
       
        pontos += 1 
    } else {

    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(()=> {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = ', isso significa que não acertou nenhuma pergunta!' : pont =  'perguntas!'

    pergunta.textContent   = "Você acertou " + pontos + " " + pont

    aviso.textContent = "Você acertou " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    //ocultar perguntas
    articleQuestoes.style.display = 'none'

    setTimeout(() => {
        pontos = 0 // zerar placar
        location.reload();
    }, 3000)
}
