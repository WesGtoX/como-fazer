const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.use('/public', express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: true
}))

const port = process.env.PORT || 3000

// Form
app.get('/', async(request, response) => {
    response.render('index')
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)


app.listen(port, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Como-Fazer Server is running on port:', port)
    }
})
