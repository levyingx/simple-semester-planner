import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

// Currently unused
function setCellTooltip(cell, discipline) {
    const tooltipContent = `
    <div class="tippy-content">
        <span class="tippy-timeslot">${cell.id}</span>
        <span class="tippy-discipline">${discipline.name}<span>
    </div>
    `

    tippy(cell, {
        content: tooltipContent,
        allowHTML: true,
        theme: 'semester',
        arrow: false,
        interactive: false
    })
}

export {
    setCellTooltip
}