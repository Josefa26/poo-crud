"use strict"
let products = [];
function listProducts() {
  console.log(products);
}

function saveProducts(nome, preco) {
  let produtoObj = {
    name: nome,
    price: preco
  };
  products.push(produtoObj);
}

function editProduct(nameFiel, name, price) {
  let position = products.findIndex(p => p.name === nameField);
  let novoProduct = { name, price };
  products[position] = novoProduct;
}

function deleteProduct(nameField) {
  let position = products.findIndex(p => p.name === nameField);
  products.splice(position, 1);
}
saveProducts('Harry Potter', 194);
saveProducts('Até o verão terminar, 30);
saveProducts('Novembro 9' ,61);
saveProducts('A Hipotese do Amor', 52);
saveProducts('Amor e Gelato', 45);
console.log(products);
deleteProduct('JJ');
console.log(products);