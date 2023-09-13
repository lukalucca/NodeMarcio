const express = require('express')
const app = express()

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/user/:id', (req, res) => {
    const id = req.params.id

    console.log(`user: ${id}`)

    res.sendFile(`${basePath}/user.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(3000)