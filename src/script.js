import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'

function addDiscipline(Discipline) {
	disciplineArray.push(Discipline)
}

function deleteDiscipline(name) {
	const index = disciplineArray.findIndex((d) => d.name === name)
	if (index !== -1) {
		disciplineArray.splice(index, 1)
	}
}

function getRenderDataFromDiscipline(Discipline) {
	const timeslot = Discipline.timeslot
	const timeslotArray = timeslot.split(',')
	const array = []

	timeslotArray.forEach(t => {
		const days = t.match(/\d+/)[0].split('')

		// Shift has only one letter
		const shift = t.match(/[A-Za-z]+/)[0]
		const slots = t.match(/\d+$/)[0].split('')

		for (let day of days) {
			for (let slot of slots) {
				array.push(`${day}${shift}${slot}`)
			}
		}
	})

	return array
}

// Timetable dynamization
const timetableHeader = document.getElementById('timetable-header')
const timetableBody = document.getElementById('timetable-body')

function cleanTimetable() {
	for (const [i, [code, time]] of Object.entries(timeObj).entries()) {
		const weekLength = Object.keys(weekObj).length
		for (let j = 0; j < weekLength; j++) {
			const weekNumber = Object.keys(weekObj)[j]
			const td = document.getElementById(`${weekNumber}${code}`)
			td.style.backgroundColor = 'whitesmoke'
		}
	}
}

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
	listElement.innerHTML = ''

	disciplineArray.forEach((Discipline, i) => {
		listElement.innerHTML += `
			<tr style="box-shadow: 8px 0px inset ${Discipline.color}, 9.5px 0px inset #2b2b2b;">
				<td data-index="${i}" data-property="name" contenteditable="true">${Discipline.name}</td>
				<td data-index="${i}" data-property="workload" contenteditable="true">${Discipline.workload}</td>
				<td data-index="${i}" data-property="type" contenteditable="true">${Discipline.type}</td>
				<td data-index="${i}" data-property="timeslot" contenteditable="true">${Discipline.timeslot}</td>
			</tr>
    	`
	})
}

listElement.addEventListener("keydown", (e) => {
	const cell = e.target
	const index = Number(cell.dataset.index)
	const property = cell.dataset.property

	if (!cell.matches("[contenteditable]")) {
		return
	}

	// When "Enter" is pressed, the cell value is updated
	if (e.key === "Enter") {
		e.preventDefault()
		disciplineArray[index][property] = cell.textContent
		cell.blur()
		cleanTimetable()
		updateTimetable()
		renderList()
	}

	// When "Delete" is pressed, delete cell and value from array
	if (e.key === "Delete") {
		e.preventDefault()
		cell.blur()
		deleteDiscipline(cell.textContent)
		cleanTimetable()
		updateTimetable()
		renderList()
	}
})

renderTimetable()
renderList()