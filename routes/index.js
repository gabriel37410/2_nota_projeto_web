var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var produtosService = require('../services/produtosService')

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post });

});

router.get('/produtos', function(req, res, next) {
  var produtos = produtosService.getProdutos();

  res.render('produto', { title: 'Produtos', produtos: produtos });
});



module.exports = router;
