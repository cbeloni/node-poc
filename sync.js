const fetch = require('node-fetch')

async function pegaDados() {
    const resultado =  await fetch('https://api.github.com/users/cbeloni')
    return resultado
}

pegaDados().then((res) => console.log('res:', res.json()))
