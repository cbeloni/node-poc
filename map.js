const pessoas = require("./pessoas.json")
const pessoa = require("./pessoa.js")
const { getNomeCompletoExt, getIdadeExt } = require('./promise-hell')
const pAll = require('./node_modules/p-all')

//console.log("pessoas:", pessoas)
//pessoas.map((pessoa) => (nome) = () => {console.log("Nome:" + nome)})


//TODO: Verificar como isso funciona
// const getOrdersToRequestInvoices = (orderIds) => utils.chunkPromise(orderIds.map((id) => () => {
//orderIds.map((id) => () => {console.log("id:", id)});

pessoas.map((p) => {
    return Promise.resolve()
});

//console.log('pessoas:', pessoas)
//console.log(pessoas[0])

const util = {
    chunkPromise: (promiseFnArr, options = {}) => {
        const concurrency = typeof options.concurrency !== 'undefined' ? options.concurrency : 10
        return pAll(promiseFnArr, { ...options, concurrency })
    }
}

const repassar = (p) => {
    return new Promise((resolve, reject) => {
        console.log("repassando function...", p)
        resolve({ ...p, repassei: true })
    })
}

const adicionarCampo = (campo) => {
    return new Promise((resolve, reject) => {

        if (campo == 10) {
            throw new Error('valor não pode ser 10')
        }

        resolve({ campoNovo: campo })
    })
}


Promise.resolve()
    .then(() => getNomeCompletoExt(pessoa))
    .then((result) => console.log(result))
    .then(() => getIdadeExt(pessoa, 34))
    .then(() => ({ ...pessoa, sexo: 'M' }))
    //.then((p) => console.log('pessoa final:', p))
    .then((p) => {
        return new Promise((resolve, reject) => {
            console.log("repassando 2...", p)
            resolve(p)
        })
    })
    .then((p) => {
        console.log('pessoa final 1:', p)
        return Promise.resolve(p)
    })
    .then((p2) => {
        console.log("p2:", p2)
        return repassar(p2)
    })
    .then((pp) => adicionarCampo(11)
        .then((novocampo) =>  ({...pp, ...novocampo}))
        .catch((err) => {
            console.log('Error: ', err.message)
            return Promise.resolve().then(() => ({ ...pp, error: err.message }))
        })
        )
    .then((p3) => console.log(`nome: ${p3.nome} - repassei: ${p3.repassei} - novocampo: ${p3.campoNovo} - error: ${p3.error}`))
    .then(() => console.log('pessoa final 3 :', pessoa))


// const actions = [
//     () => getNomeCompletoExt(pessoa),
//     () => getNomeCompletoExt(pessoa)
// ];

// util.chunkPromise([() => getNomeCompletoExt(pessoa), () =>  getNomeCompletoExt(pessoa), () => getNomeCompletoExt(pessoa)])
// .then(([p, p2]) => {
//     console.log('param 1:' + JSON.stringify(p)) 
//     console.log('param 2:' + JSON.stringify(p2)) 
// })

// console.log(typeof (() => getNomeCompletoExt(pessoa)))

// pAll(actions)
// .then(([p, p2]) => {
//     console.log('param 3:' + JSON.stringify(p)) 
//     console.log('param 4:' + JSON.stringify(p2)) 
// })