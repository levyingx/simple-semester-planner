import axios from 'axios'

import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'
import * as calendar from './scripts/calendar.js'
import * as list from './scripts/list.js'

document.addEventListener('DOMContentLoaded', async () => {
    await calendar.render()
    await list.render()
})

