var express = require('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');

var produtosService = require('../../services/produtosService');

router.get('/', function (req, res, next) {
  var produtos = produtosService.getProdutos();

  var data = {
    produtos: produtos
  };

  res.render('admin/produtos/index', data);
});

router.get('/create', function (req, res, next) {

  res.render('admin/produtos/create');
});

router.post('/create', uploader.single('image'), function (req, res, next) {
  var produtos = produtosService.getProdutos();

  var newId = produtos.length + 1;

  var newProduto = {};
  newProduto.id = newId;
  newProduto.nome = req.body.nome;
  newProduto.descricao = req.body.descricao;
  newProduto.preco = req.body.preco;
  newProduto.image = req.file.filename;

  produtosService.saveProduto(newProduto);

  res.redirect('/admin/produtos');
});

module.exports = router;