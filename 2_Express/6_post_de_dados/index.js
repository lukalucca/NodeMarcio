const express = require('express')
const { format } = require('path')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// receber informações do corpo da requisição
app.use(express.urlencoded({
    extended: true
}))

//converter em objeto
app.use(express.json())

//utilizar arquivo estaticos como css
app.use(express.static('public'))

app.post('/user/enviar', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age
    const game = req.body.game

    console.log(`
        User : ${name}
        Email: ${email}
        Age  : ${age}
        Game : ${game}
    `)
    res.redirect('/')
})

app.get('/user/cadastrar', (req, res) =>{
    res.sendFile(`${basePath}/form.html`)
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id

    console.log(`user: ${id}`)

    res.sendFile(`${basePath}/user.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(3000)