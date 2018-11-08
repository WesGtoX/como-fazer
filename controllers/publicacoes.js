const api = require('../api')

// Form
const novaForm = async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', { categorias })
}
// Create
const nova = async(req, res) => {
    await api.create('publicacoes/' + req.body.categoria, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/'+req.body.categoria)
}
// List
const list = async(req, res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacoes/'+categoria)
    res.render('publicacoes/index', { publicacoes, categoria })
}
// Delete
const excluir = async(req, res) => {
    await api.apagar('publicacoes/'+req.params.categoria, req.params.id)
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}
// Edit
const editarForm = async(req, res) => {
    const publicacao = await api.get('publicacoes/'+req.params.categoria, req.params.id)
    res.render('publicacoes/editar', {
        publicacao,
        categoria: req.params.categoria
    })
}
// Update
const editar = async(req, res) => {
    await api.update('publicacoes/'+req.params.categoria, req.params.id, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo        
    })
    res.redirect('/publicacoes/categoria/'+req.params.categoria)
}

module.exports = {
    novaForm, nova, 
    list, excluir, 
    editarForm, editar
}