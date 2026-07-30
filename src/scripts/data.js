class Discipline {
    constructor(name, workload, type, timeslot, status = "Pendente", color = "crimson") {
        this.name = name
        this.workload = workload
        this.type = type
        this.timeslot = timeslot
        this.status = status
        this.color = color
    }
}

const color = {
    red: 'oklch(57.7% 0.245 27.325)',
    orange: 'oklch(70.5% 0.213 47.604)',
    yellow: 'oklch(82.8% 0.189 84.429)',
    green: 'oklch(62.7% 0.194 149.214)',
    blue: 'oklch(54.6% 0.245 262.881)',
    indigo: 'oklch(49.6% 0.265 301.924)',
    pink: 'oklch(59.2% 0.249 0.584)',
}

const typeObj = {
    'Pendente': {
        outlineColor: 'oklch(28.908% 0.00003 271.152 / 0.5)',
        textColor: 'oklch(28.908% 0.00003 271.152)',
    },
    'Obrigatória': {
        outlineColor: 'oklch(57.7% 0.245 27.325 / 0.5)',
        textColor: 'oklch(57.7% 0.245 27.325)',
    },
    'Optativa': {
        outlineColor: 'oklch(62.7% 0.194 149.214 / 0.5)',
        textColor: 'oklch(62.7% 0.194 149.214)',
    },
    'Eletiva': {
        outlineColor: 'oklch(54.6% 0.245 262.881 / 0.5)',
        textColor: 'oklch(54.6% 0.245 262.881)',
    },
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

let disciplineArray = [
    new Discipline(
        'Aprendizado de Máquina Supervisionado',
        60,
        'Optativa',
        '35T12',
        'Pendente',
        color.red
    ),
    new Discipline(
        'Introdução à Inteligência Artificial',
        60,
        'Optativa',
        '35M56',
        'Pendente',
        color.blue
    ),
    new Discipline('Envelhecimento, Ed. e Tecnologia', 60, 'Optativa', '24T56', 'Pendente', color.pink),
    new Discipline('Boas Práticas de Programação', 30, 'Optativa', '6M56', 'Pendente', color.indigo),
    new Discipline(
        'Algoritmo e Programação de Computadores',
        60,
        'Eletiva',
        '35T34',
        'Pendente',
        color.orange
    ),
    new Discipline(
        'Cálculo Diferencial e Integral I',
        90,
        'Obrigatória',
        '246M12',
        'Pendente',
        color.green
    ),
]

export { Discipline, timeObj, weekObj, disciplineArray, typeObj, color }