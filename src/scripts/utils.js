function addDiscipline(Discipline) {
    disciplineArray.push(Discipline)
}

function deleteDiscipline(name) {
    const index = disciplineArray.findIndex((d) => d.name === name)
    if (index !== -1) {
        disciplineArray.splice(index, 1)
    }
}

export {
    addDiscipline,
    deleteDiscipline,
}