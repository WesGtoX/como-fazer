const express = require('express')
const app = express()
const axios = require('axios')

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    const content = await axios.get('https://como-fazer-wesgtox.firebaseio.com/teste.json')
    console.log(content.data)
    response.render('index', { i: content.data })
})

app.listen(port, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Como-Fazer Server is running on port:', port)
    }
})