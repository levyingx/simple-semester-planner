import './style.scss'

class Discipline {
    constructor(name, workload, type, status, timetable) {
        this.name = name
        this.workload = workload
        this.type = type
        this.status = status
        this.timetable = timetable
    }
}

let array = [
    new Discipline('FMC', 90, 'Obrigatória'),
    new Discipline('FMC2', 90, 'Obrigatória'),
    new Discipline('VGA', 60, 'Obrigatória'),
    new Discipline('Probabilidade', 60, 'Obrigatória'),
    new Discipline('Aprendizado de Máquina Não-Supervisionado', 30, 'Optativa'),
    new Discipline('MLOps', 60, 'Optativa'),
    new Discipline('Boas Práticas de Programação', 30, 'Optativa'),
    new Discipline('Grafos', 60, 'Optativa')
]

const semester = {
    workload: array.reduce((acc, current) => acc + current.workload, 0),
    numDisciplines: array.length
}

function addDiscipline(Discipline) {
    array.push(Discipline)
}

function deleteDiscipline(name) {
    array = array.filter(d => d.name !== name)
}

const listElement = document.getElementById('list')
const numDisciplinesElement = document.getElementById('num-disciplines')
const workloadTotalElement = document.getElementById('workload-total')

for (let Discipline of array) {
    listElement.innerHTML += `
        <tr>
	        <td>${Discipline.name}</td>
    	    <td>${Discipline.workload}</td>
    	    <td>${Discipline.type}</td>
	    </tr>
    `
}

numDisciplinesElement.textContent = semester.numDisciplines
workloadTotalElement.textContent = `${semester.workload}h`