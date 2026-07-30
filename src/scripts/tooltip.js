import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
 
// Currently unused
function setCellTooltip(cell, discipline) {
    tippy(cell, {
        content: `<b>${cell.id}</b> <span class="tooltip-text">${discipline.name}<span>`,
        allowHTML: true,
        theme: 'semester',
        arrow: false,
        interactive: false
    })
}

export {
    setCellTooltip
}