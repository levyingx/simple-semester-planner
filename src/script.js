import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'

const semester = {
    workload: disciplineArray.reduce((acc, current) => acc + current.workload, 0),
    numDisciplines: disciplineArray.length,
}

function addDiscipline(Discipline) {
    disciplineArray.push(Discipline)
}

function deleteDiscipline(name) {
    disciplineArray = disciplineArray.filter((d) => d.name !== name)
}

function parseTimeslot(timeslot) {
	// if it comes with whitespaces, separate into array of values
	// for each 
	const days = timeslot.match(/\d+/)[0]
	const shift = timeslot.match(/[A-Za-z]+/)[0]
	const slots = timeslot.match(/\d+$/)[0]
	console.log('Days: ', days)
	console.log('Shift: ', shift)
	console.log('Slots: ', slots)
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

for (let Discipline of disciplineArray) {
    listElement.innerHTML += `
        <tr>
	        <td class="list-flex">
				<div style='background-color: ${Discipline.color}'></div>
				<span>${Discipline.name}</span>
			</td>
    	    <td>${Discipline.workload}</td>
    	    <td>${Discipline.type}</td>
    	    <td>${Discipline.timeslot}</td>
	    </tr>
    `
}

numDisciplinesElement.textContent = semester.numDisciplines
workloadTotalElement.textContent = `${semester.workload}h`