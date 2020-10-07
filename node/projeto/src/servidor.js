const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
const { urlencoded } = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware1...')
    next()
})

// app.get('/produtos', (req, res, next) => {
//     res.send({ nome: 'Notebook', preco: 123.45 }) // converser para JSON pelo método send
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.param.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // converte JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // converte JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // converte JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})