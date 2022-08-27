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


Promise.resolve()
.then(() => getNomeCompleto())
.then(() => console.log(pessoa))

module.export = getNomeCompletoExt