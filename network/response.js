const success = (req, res) => {
    res.status(201).send({error: '', body: 'Creado correctamente'})
}

const error = (req, res) => {
    res.status(500).send({error: 'Accion no permitida', body: ''})
}

module.exports = {
    success,
    error
}