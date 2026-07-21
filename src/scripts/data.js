class Discipline {
    constructor(name, workload, type, status, timetable) {
        this.name = name
        this.workload = workload
        this.type = type
        this.status = status
        this.timetable = timetable
    }
}

const timeObj = {
    M1: '07h',
    M2: '07h50',
    M3: '08h50',
    M4: '09h40',
    M5: '10h40',
    M6: '11h30',
    T1: '13h',
    T2: '13h50',
    T3: '14h50',
    T4: '15h40',
    T5: '16h40',
    T6: '17h30',
    N1: '18h40',
    N2: '19h30',
    N3: '20h30',
	N4: '21h20',
}

const weekObj = {
	2: 'Segunda',
	3: 'Terça',
	4: 'Quarta',
	5: 'Quinta',
	6: 'Sexta',
}

export { Discipline, timeObj, weekObj }