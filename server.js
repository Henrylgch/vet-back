const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const response = require('./network/response')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/', (req, res) => {
    response.success(req, res)
})

router.post('/', (req, res) => {
    console.log(req.query)
    response.error(req, res)
})

app.listen(3000, () => {
    console.log('Corriendo desde el puerto 3000')
})