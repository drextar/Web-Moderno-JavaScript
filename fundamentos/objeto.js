const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        teste: 'testando'
    }
}

console.log(prod2)