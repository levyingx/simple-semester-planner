import axios from "axios"
import { typeObj, disciplineArray, Discipline } from "./data"
const listElement = document.getElementById('list')
const numDisciplinesElement = document.getElementById('num-disciplines')
const workloadTotalElement = document.getElementById('workload-total')

/**
 * Initializes an empty list component. 
 */
function init() {
    clear()

    for (let i = 0; i < 6; i++) {
        listElement.innerHTML += `
			<tr style="box-shadow: 8px 0px inset whitesmoke, 9.5px 0px inset white;">
				<td data-index="${i}" data-property="name"></td>
				<td data-index="${i}" data-property="workload"></td>
				<td data-index="${i}" data-property="type">
                    <span 
                        class="badge" 
                        style="
                            color: white;
                        "
                    ></span>
                    </td>
				<td data-index="${i}" data-property="timeslot"></td>
			</tr>
    	`
    }
}

/**
 * Fills the list component with the data you pass to it.
 * @param {disciplineArray} data - A an array containing all the current disciplines.
 */
async function fill(data) {
    clear()

    data.forEach((Discipline, i) => {
        listElement.innerHTML += `
			<tr style="box-shadow: 8px 0px inset ${Discipline.color}, 9.5px 0px inset #2b2b2b;">
				<td data-index="${i}" data-property="name">${Discipline.name}</td>
				<td data-index="${i}" data-property="workload">${Discipline.workload}h</td>
				<td data-index="${i}" data-property="type">
                    <span 
                        class="badge" 
                        style="color: ${typeObj[Discipline.type].textColor};"
                    >${Discipline.type}</span>
                    </td>
				<td data-index="${i}" data-property="timeslot">${Discipline.timeslot}</td>
			</tr>
    	`
    })

    const numDisciplines = data.length
    const totalWorkload = data.reduce((acc, current) => acc + current.workload, 0)

    numDisciplinesElement.textContent = numDisciplines
    workloadTotalElement.textContent = `${totalWorkload}h`
}

/** 
 * Clears the list content.
 */
function clear() {
    listElement.innerHTML = ''
}

/**
 * Calls `init()` first. Then, tries `fill()`.
 */
async function render() {
    init()

    try {
        const { data } = await axios.get('http://localhost:8080/disciplines')
        fill(data)
    } catch (error) {
        console.error('Error fetching list data:', error.message)
    }
}

listElement.addEventListener("keydown", (e) => {
    const cell = e.target
    const index = Number(cell.dataset.index)
    const property = cell.dataset.property

    if (!cell.matches("[contenteditable]")) {
        return
    }

    if (e.key === "Enter") {
        e.preventDefault()
        disciplineArray[index][property] = cell.textContent
        cell.blur()
        calendar.clear()
        calendar.refresh()
        render()
    }

    if (e.key === "Delete") {
        e.preventDefault()
        cell.blur()
        deleteDiscipline(cell.textContent)
        calendar.clear()
        calendar.refresh()
        render()
    }
})

export {
    render
}
