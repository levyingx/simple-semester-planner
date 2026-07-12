import './style.scss'

class Disciplina {
    constructor(nome, ch, tipo, status, horario) {
        this.nome = nome
        this.ch = ch
        this.tipo = tipo
        this.status = status
        this.horario = horario
    }
}

let array = [
    new Disciplina('FMC', 90, 'Obrigatória'),
    new Disciplina('FMC2', 90, 'Obrigatória'),
    new Disciplina('VGA', 60, 'Obrigatória'),
    new Disciplina('Probabilidade', 60, 'Obrigatória'),
    new Disciplina('Aprendizado de Máquina Não-Supervisionado', 30, 'Optativa'),
    new Disciplina('MLOps', 60, 'Optativa'),
    new Disciplina('Boas Práticas de Programação', 30, 'Optativa'),
    new Disciplina('Grafos', 60, 'Optativa')
]

const semestre = {
    ch: array.reduce((acc, current) => acc + current.ch, 0),
    numDisciplinas: array.length
}

function adicionarDisciplina(disciplina) {
    array.push(disciplina)
}

function removerDisciplina(nome) {
    array = array.filter(d => d.nome !== nome)
}

const listElement = document.getElementById('list')
const numDisciplinasElement = document.getElementById('num-disciplinas')
const chTotalElement = document.getElementById('ch-total')

for (let disciplina of array) {
    listElement.innerHTML += `
        <tr>
	        <td>${disciplina.nome}</td>
    	    <td>${disciplina.ch}</td>
    	    <td>${disciplina.tipo}</td>
	    </tr>
    `
}

numDisciplinasElement.textContent = semestre.numDisciplinas
chTotalElement.textContent = `${semestre.ch}h`