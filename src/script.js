import axios from 'axios'

import './style.scss'
import { Discipline, timeObj, weekObj, disciplineArray } from './scripts/data.js'
import * as timetable from './scripts/timetable.js'
import * as list from './scripts/list.js'

import '../src/scripts/tooltip.js'
import '../src/scripts/user.js'

const userNameElement = document.getElementById('user-name')

axios
	.get(`http://localhost:3000/user`, {
	})
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.error(error);
	})
	.finally(() => {
		console.log("Request completed");
	});
	
timetable.render()
list.render()