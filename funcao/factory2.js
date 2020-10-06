function criarProduto(nome, preco) {
    return {
        nome,
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto('Mouse', 100))
console.log(criarProduto('Teclado', 225))

