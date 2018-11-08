const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

// Form
router.get('/nova', controller.novaForm)
// Create
router.post('/nova', controller.nova)
// List
router.get('/categoria/:categoria', controller.list)
// Delete
router.get('/excluir/:categoria/:id', controller.excluir)
// Edit
router.get('/editar/:categoria/:id', controller.editarForm)
// Update
router.post('/editar/:categoria/:id', controller.editar)

module.exports = router
