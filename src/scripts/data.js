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
        'rebeccapurple'
    ),
    new Discipline(
        'Introdução à Inteligência Artificial',
        60,
        'Optativa',
        '35M56',
        'Pendente',
        'goldenrod'
    ),
    new Discipline('Envelhecimento, Ed. e Tecnologia', 60, 'Optativa', '24T56', 'Pendente', 'indigo'),
    new Discipline('Boas Práticas de Programação', 30, 'Optativa', '6M56', 'Pendente', 'khaki'),
    new Discipline(
        'Algoritmo e Programação de Computadores',
        60,
        'Eletiva',
        '35T34',
        'Pendente',
        'mediumseagreen'
    ),
    new Discipline(
        'Cálculo Diferencial e Integral I',
        90,
        'Obrigatória',
        '246M12',
        'Pendente',
    ),
]

export { Discipline, timeObj, weekObj, disciplineArray }