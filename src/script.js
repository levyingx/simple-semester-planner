import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'

function addDiscipline(Discipline) {
	disciplineArray.push(Discipline)
}

function deleteDiscipline(name) {
	disciplineArray = disciplineArray.filter((d) => d.name !== name)
}

function getRenderDataFromDiscipline(Discipline) {
	const timeslot = Discipline.timeslot
	const timeslotArray = timeslot.split(',')
	const array = []

	for (let t of timeslotArray) {
		const days = t.match(/\d+/)[0].split('')

		// Shift has only one letter
		const shift = t.match(/[A-Za-z]+/)[0]
		const slots = t.match(/\d+$/)[0].split('')

		for (let day of days) {
			for (let slot of slots) {
				array.push(`${day}${shift}${slot}`)
			}
		}
	}

	return array
}

// Timetable dynamization
const timetableHeader = document.getElementById('timetable-header')
const timetableBody = document.getElementById('timetable-body')

function updateTimetable() {
	for (const discipline of disciplineArray) {
		const array = getRenderDataFromDiscipline(discipline)

		array.forEach(timeslot => {
			const cell = document.getElementById(timeslot)
			if (cell) {
				cell.style.backgroundColor = discipline.color
			}
		})
	}
}

function initTimetable() {
	for (const [number, weekday] of Object.entries(weekObj)) {
		const th = document.createElement('th')
		th.textContent = number

		timetableHeader.appendChild(th)
	}

	for (const [i, [code, time]] of Object.entries(timeObj).entries()) {
		const tr = document.createElement('tr')

		const th = document.createElement('th')
		th.textContent = code

		tr.appendChild(th)

		const weekLength = Object.keys(weekObj).length
		for (let j = 0; j < weekLength; j++) {
			const weekNumber = Object.keys(weekObj)[j]

			const td = document.createElement('td')
			const id = `${weekNumber}${code}`
			td.id = id

			tr.appendChild(td)
		}

		timetableBody.appendChild(tr)
	}
}

function renderTimetable() {
	initTimetable()
	updateTimetable()
}

// List dynamization
const listElement = document.getElementById('list')
const numDisciplinesElement = document.getElementById('num-disciplines')
const workloadTotalElement = document.getElementById('workload-total')

function renderList() {
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
}

renderTimetable() 
renderList()