//lista de alunos
let listaAlunos = [
    {
        nome:"Jorge",
        idade: 19,
        materias: [
            {
                nomeMateria: "TIA",
                totalHoras: 100,
                presenca: 75,
                nota: 10
            },
            {
                nomeMateria: "PDM",
                totalHoras: 100,
                presenca: 50,
                nota: 5
            }
        ]
    },
    {
        nome:"Pedro",
        idade: 19,
        materias: [
            {
                nomeMateria: "EdS",
                totalHoras: 100,
                presenca: 75,
                nota: 10
            },
            {
                nomeMateria: "TCC",
                totalHoras: 100,
                presenca: 50,
                nota: 5
            }
        ]
    }
]

//Precisa ter 75% de presenca ou mais
//Precisa ter nota acima de 6

function avaliarAluno(materia){
    const nota = materia.nota
    const presença = materia.presenca
    if(nota >= 6 && presença >= 75) {
        
        console.log("APROVADO")
        console.log("MATERIA: " + materia.nomeMateria)
        console.log("NOTA: " + materia.nota)
        console.log("PRESENCA: " + materia.presenca)
        console.log("------------------------------")
        return
    }

    console.log("REPROVADO")
    console.log("MATERIA: " + materia.nomeMateria)
    console.log("NOTA: " + materia.nota)
    console.log("PRESENCA: " + materia.presenca)
    console.log("------------------------------")

}

function validaTodasMaterias(aluno){
    aluno.materias.forEach(materia => {
        avaliarAluno(materia)
    });
}

function validaTurma(listaAlunos) {

    listaAlunos.forEach(aluno => {
        console.log("------------------------------")
        console.log(aluno.nome)
        console.log("------------------------------")
        validaTodasMaterias(aluno)
    });
}

validaTurma(listaAlunos)
