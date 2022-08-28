const pessoa = {
    nome: 'Cauê',
    sobrenome: 'beloni'
}

const getNomeCompleto = () => {
    return new Promise((resolve, reject) => {
        console.log("Chamando getNomeCompleto...")
        const nomeCompleto = pessoa.nome + " " + pessoa.sobrenome
        pessoa.nomeCompleto = nomeCompleto
        resolve()
    })
}

const getNomeCompletoExt = (p) => {
    return new Promise((resolve, reject) => {
        console.log("Chamando getNomeCompleto...")
        const nomeCompleto = p.nome + " " + p.sobrenome
        p.nomeCompleto = nomeCompleto
        resolve(p)
    })
}

const getIdadeExt = (p, idade) => {
    return new Promise((resolve, reject) => {
        console.log("Chamando getNomeCompleto...")
        p.idade = idade
        resolve(p)
    })
}

const main = () => {
    Promise.resolve()
    .then(() => getNomeCompleto())
    .then(() => console.log(pessoa))
    .then(() => getNomeCompletoExt(pessoa))
    .then((result) => console.log(result))
}


module.exports = { getNomeCompletoExt, getIdadeExt }