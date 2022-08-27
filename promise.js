const promise = new Promise((resolve, reject) => {
    const   aNumber = 37;
    resolve(aNumber)
})

const umPromise = new Promise((resolve, reject) => {
        const aNumber = 1
        resolve(aNumber)
    }
)

const doisPromise = new Promise((resolve, reject) => {
    console.log(resolve)
    const aNumber = 2
    resolve (aNumber)
})

// umPromise.then((value) => console.log(value))
//          .then((value2) => console.log(value2))

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const promiseComParametro = (nome, sobrenome) => {
    return new Promise(async (resolve, reject) => {
        await sleep(2000)
        console.log(new Date().toISOString()) 
        if (nome != 'Cauê'){
            reject("Nome inválido")
        }
        resolve(nome + ' ' +sobrenome)
    })
}

//Promises sequenciais
// Promise.resolve()
// .then(() => promiseComParametro('Cauê', 'Beloni'))
// .then((nomeCompleto) => console.log(nomeCompleto))
// .then(() => promiseComParametro('Isis', 'Beloni'))
// .then((nomeCompleto) => console.log(nomeCompleto))
// .catch((erroMsg) => console.log("Except:", erroMsg))


//Promises em paralelo
Promise.all([promiseComParametro('Cauê', 'Beloni'), promiseComParametro('Cauê', 'Beloni')])
.then(([nomeUm, nomeDois]) => {
    console.log('nomeUm:' , nomeUm)
    console.log(nomeDois)
})
.catch((erroMsg) => console.log(erroMsg))