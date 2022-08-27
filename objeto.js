const pessoas = [ { nome: 'caue', idade: 34 }, { nome: 'isis', idade: '7' , sexo: 'f'} ]

const adicionaSexo = (pessoas) => {
    pessoas.filter((pessoa) => pessoa.sexo == null)
    .map((pessoa) => pessoa.sexo = 'm')
    return pessoas
}

const adicionaSexo2 = (pessoas) => {
    pessoas.filter((pessoa) => pessoa.sexo == null)
    .map((p) =>  ({
        ...p,
        sexo: 'm'
    }))
    return pessoas
}

const adicionaSexo3 = (pessoas) => {
    return pessoas.filter((pessoa) => pessoa.sexo == null)
        .map((p) =>  ({
        ...p,
        sexo: 'm'
    }))
}

const pessoas2 = adicionaSexo2(pessoas)
console.log(pessoas2)