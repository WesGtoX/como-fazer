const express = require('express')
const router = express.Router()
const controller = require('../controllers/categorias')

// Form
router.get('/nova', controller.novaForm)
// Create
router.post('/nova', controller.nova)
// List
router.get('/', controller.list)
// Delete
router.get('/excluir/:id', controller.excluir)
// Edit
router.get('/editar/:id', controller.editarForm)
// Update
router.post('/editar/:id', controller.editar)

module.exports = router
