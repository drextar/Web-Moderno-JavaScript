console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1          //referencia de objeto apontando para module.exports
exports.b = 2       //referencia de objeto apontando para module.exports
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { // JEITO ERRADO
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true } //JEITO CORRETO