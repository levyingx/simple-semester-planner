import * as data from './data'

const header = document.getElementById('timetable-header')
const body = document.getElementById('timetable-body')


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

/**
 * Paints a cell.
 * @param {HTMLElement | null} cell - A `<td>` element representing a cell.
 * @param {string} color - The color to paint the cell.
 */
function paintCell(cell, color) {
    cell.style.backgroundColor = color
}

/**
 * Resets a cell.
 * @param {HTMLElement | null} cell - A `<td>` element representing a cell. 
 */
function clearCell(cell) {
    cell.style.backgroundColor = ''
    cell.textContent = ''
}

/**
 * Creates a new cell.
 * @param {string} id The ID the cell will have. Pass it in the format `${weekNumber}${code}`.
 * @example createCell(`${weekNumber}${code}`)
 * @returns {HTMLElement}
*/
function createCell(id) {
    const cell = document.createElement('td')
    cell.id = id
    cell.tabIndex = 0
    return cell
}

/**
 * Gets a cell by its ID.
 * @param {string} id The ID the cell will have. Pass it in the format `${weekNumber}${code}`.
 * @example getCell(`${weekNumber}${code}`)
 * @returns {HTMLElement}
 */
function getCell(id) {
    return document.getElementById(id)
}

/** Iterates through every cell in the timetable. */
function forEachCell() {
    // TODO!
}

function clear() {
    for (const [i, [code, time]] of Object.entries(data.timeObj).entries()) {
        const weekLength = Object.keys(data.weekObj).length
        for (let j = 0; j < weekLength; j++) {
            const weekNumber = Object.keys(data.weekObj)[j]
            const cell = getCell(`${weekNumber}${code}`)
            clearCell(cell)
        }
    }
}

function refresh() {
    for (const discipline of data.disciplineArray) {
        const array = getRenderDataFromDiscipline(discipline)

        array.forEach(timeslot => {
            const cell = getCell(timeslot)
            paintCell(cell, discipline.color)
        })
    }
}

function init() {
    for (const [number, weekday] of Object.entries(data.weekObj)) {
        const th = document.createElement('th')
        th.textContent = number
        header.appendChild(th)
    }

    for (const [i, [code, time]] of Object.entries(data.timeObj).entries()) {
        const tr = document.createElement('tr')

        const th = document.createElement('th')
        th.textContent = code
        tr.appendChild(th)

        const weekLength = Object.keys(data.weekObj).length
        for (let j = 0; j < weekLength; j++) {
            const weekNumber = Object.keys(data.weekObj)[j]
            const td = createCell(`${weekNumber}${code}`)
            tr.appendChild(td)
        }

        body.appendChild(tr)
    }
}

function render() {
    init()
    refresh()
}

export {
    getRenderDataFromDiscipline,
    paintCell,
    clearCell,
    getCell,
    forEachCell,
    clear,
    init,
    render,
    refresh,
    header,
    body,
}