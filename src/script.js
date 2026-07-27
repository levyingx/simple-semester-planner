import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'
import * as timetable from './scripts/timetable.js'

function addDiscipline(Discipline) {
	disciplineArray.push(Discipline)
}

function deleteDiscipline(name) {
	const index = disciplineArray.findIndex((d) => d.name === name)
	if (index !== -1) {
		disciplineArray.splice(index, 1)
	}
}

// Timetable

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

	// When "Enter" is pressed, the cell value is refreshed
	if (e.key === "Enter") {
		e.preventDefault()
		disciplineArray[index][property] = cell.textContent
		cell.blur()
		timetable.clear()
		timetable.refresh()
		renderList()
	}

	// When "Delete" is pressed, delete cell and value from array
	if (e.key === "Delete") {
		e.preventDefault()
		cell.blur()
		deleteDiscipline(cell.textContent)
		timetable.clear()
		timetable.refresh()
		renderList()
	}
})

timetable.render()
renderList()