import { disciplineArray, typeObj } from "./data"

const listElement = document.getElementById('list')
const numDisciplinesElement = document.getElementById('num-disciplines')
const workloadTotalElement = document.getElementById('workload-total')

function render() {
    listElement.innerHTML = ''

    disciplineArray.forEach((Discipline, i) => {
        listElement.innerHTML += `
			<tr style="box-shadow: 8px 0px inset ${Discipline.color}, 9.5px 0px inset #2b2b2b;">
				<td data-index="${i}" data-property="name">${Discipline.name}</td>
				<td data-index="${i}" data-property="workload">${Discipline.workload}</td>
				<td data-index="${i}" data-property="type">
                    <span 
                        class="badge" 
                        style="
                            color: ${typeObj[Discipline.type].textColor};
                            outline-color: ${typeObj[Discipline.type].outlineColor};
                        "
                    >${Discipline.type}</span>
                    </td>
				<td data-index="${i}" data-property="timeslot">${Discipline.timeslot}</td>
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

    if (e.key === "Enter") {
        e.preventDefault()
        disciplineArray[index][property] = cell.textContent
        cell.blur()
        timetable.clear()
        timetable.refresh()
        render()
    }

    if (e.key === "Delete") {
        e.preventDefault()
        cell.blur()
        deleteDiscipline(cell.textContent)
        timetable.clear()
        timetable.refresh()
        render()
    }
})

export {
    render
}
