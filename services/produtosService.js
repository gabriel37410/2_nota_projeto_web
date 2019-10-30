var fs = require('fs');

var produtosFilePath = 'db/produtos.json';

var loadFileProdutos = function() {
  var fileData = fs.readFileSync(produtosFilePath, 'utf8');
  var produtos = JSON.parse(fileData);

  return produtos;
}

var saveFileProdutos = function(produtos) {
  var data = JSON.stringify(produtos);
  fs.writeFileSync(produtosFilePath, data, 'utf8');
}

var getProdutos = function() {
  var produtos = loadFileProdutos();
  return produtos;
}

var saveProduto = function(newProduto) {
  var produtos = loadFileProdutos();
  produtos.push(newProduto);
  saveFileProdutos(produtos);
}

module.exports = {
  getProdutos: getProdutos,
  saveProduto: saveProduto
}