function world() {
    console.log("world")
    console.log("Fim world")
    throw new Error("Erro2")
}

const promise = new Promise((resolve, reject) => {
    const   aNumber = 37;
    resolve(aNumber)
})
//promise.then((value) => {console.log(value)})
//       .then(() => console.log("terminou"))

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

umPromise.then((value) => console.log(value))
         .then((value2) => console.log(value2))


/*
new Promise((resolve, reject) => {resolve()})
            .then(() => console.log('chamei 1'))
            .then(() => world())
            .then(() => console.log('chamei fim'))
            .catch((value) => console.log('deu erro: ' + value))
*/