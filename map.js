const pessoas = require("./pessoas.json")
const pessoa = require("./pessoa.js")
const {getNomeCompletoExt } = require('./promise-hell')
//console.log("pessoas:", pessoas)

//pessoas.map((pessoa) => (nome) = () => {console.log("Nome:" + nome)})


//TODO: Verificar como isso funciona
// const getOrdersToRequestInvoices = (orderIds) => utils.chunkPromise(orderIds.map((id) => () => {
//orderIds.map((id) => () => {console.log("id:", id)});

pessoas.map((p) => { console.log("pessoa:", p) });

getNomeCompletoExt(pessoa).then((p) => console.log('resolvido:', p))