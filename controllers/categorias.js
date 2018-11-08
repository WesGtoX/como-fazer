const api = require('../api')

// Form
const novaForm = (req, res) => {
    res.render('categorias/nova')
}
// Create
const nova = async(req, res) => {
    await api.create('categorias', {
        categoria: req.body.categoria
    })
    res.redirect('/categorias')
}
// List
const list = async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', { categorias })
}
// Delete
const excluir = async(req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categorias')
}
// Edit
const editarForm = async(req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    console.log(categoria)
    res.render('categorias/editar', {
        categoria
    })
}
// Update
const editar = async(req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria        
    })
    res.redirect('/categorias')
}

module.exports = {
    novaForm, nova, 
    list, excluir, 
    editarForm, editar
}