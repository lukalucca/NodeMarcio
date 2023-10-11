const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// config handlebars com template engine

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard',(req, res) =>{
    const items = ['Item a', 'Item b', 'Item c']


    res.render('dashboard', { items})
})

app.get('/', (req, res) =>{
    const usuario = {
        nome:"Lucca",
        profissao:"bancario",
        idade:"25"
    }

    const auth = true


    res.render('home',{usuario, auth})
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 'igor'3k!")
})






//Error: ENOENT: no such file or directory, open 'C:\Users\lukal\Desktop\NodeMode\3_HANDLEBARS\4_condicionais\3_Dados_para_View\views\layouts\main.handlebars'