import axios from 'axios'

import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'
import * as timetable from './scripts/timetable.js'
import * as list from './scripts/list.js'

document.addEventListener('DOMContentLoaded', async () => {
    timetable.render()

    await list.render()    
})

