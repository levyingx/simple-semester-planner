import './style.scss'
import { Discipline, timeObj, weekObj } from './scripts/data.js'

let array = [
    new Discipline(
        'Aprendizado de Máquina Supervisionado',
        60,
        'Optativa',
        '35T12'
    ),
    new Discipline(
        'Introdução à Inteligência Artificial',
        60,
        'Optativa',
        '35M56'
    ),
    new Discipline('Envelhecimento, Ed. e Tecnologia', 60, 'Optativa', '24T56'),
    new Discipline('Boas Práticas de Programação', 30, 'Optativa', '6M56'),
    new Discipline(
        'Algoritmo e Programação de Computadores',
        60,
        'Eletiva',
        '35T34'
    ),
    new Discipline(
        'Cálculo Diferencial e Integral I',
        90,
        'Obrigatória',
        '246M12'
    ),
]

const semester = {
    workload: array.reduce((acc, current) => acc + current.workload, 0),
    numDisciplines: array.length,
}

function addDiscipline(Discipline) {
    array.push(Discipline)
}

function deleteDiscipline(name) {
    array = array.filter((d) => d.name !== name)
}

// Timetable dynamization
const timetableHeader = document.getElementById('timetable-header')
const timetableBody = document.getElementById('timetable-body')

for (const [number, weekday] of Object.entries(weekObj)) {
    timetableHeader.innerHTML += `
	    <th>${number}</th>
	`
}

for (const [code, time] of Object.entries(timeObj)) {
    timetableBody.innerHTML += `
	    <tr>
	        <th>${code}</th>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	    </tr>
    `
}

// List dynamization
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