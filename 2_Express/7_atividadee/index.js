const express = require('express')
const app = express()

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/complementar/enviar', (req, res) =>{
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha

    console.log(`
    Usuario: ${nome}
    Email: ${email}
    Senha: ${senha}`)

    res.redirect('/')
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/cadastro.html`)
})

app.get('/index/complementar', (req, res) => {
    res.sendFile(`${basePath}/formulario.html`)
})






app.listen(5000)