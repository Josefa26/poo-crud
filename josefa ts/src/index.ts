interface Products{
  name: string;
  price: number;
}

let products: Array<Products> = {

}

function listProducts() {
  console.log(products);
}

function saveProducts(nome: string, preco: number) {
  let produtoObj: Products = {
    name: nome,
    price: preco
  };

  products.push(produtoObj);
}

function editProduct(nameField: string, name: string, price: number) {
  let position = products.findIndex(p => p.name === nameField);
  let novoProduct: Products = { name, price };
  produto[position] = novoProduct;
}

function deleteProduct(nameField: string) {
  let position = products.findIndex(p => p.name === nameField);
  products.splice(position, 1);
}

saveProducts('Harry Potter', 194);
saveProducts('Até o verão terminar, 30);
saveProducts('Novembro 9' ,61);
saveProducts('A Hipotese do Amor', 52);
saveProducts('Amor e Gelato', 45);
console.log(products);



console.log(products);

deleteProduct('JJ');

console.log(products);



