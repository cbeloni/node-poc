const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true,
}),
)
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message: 'oi'})
})

//rotas
const pessoaRoutes = require('./routes/pessoaRoutes')
app.use('/pessoa', pessoaRoutes)

app.listen(3000)