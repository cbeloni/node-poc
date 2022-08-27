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


Promise.resolve()
.then(() => getNomeCompleto())
.then(() => console.log(pessoa))

