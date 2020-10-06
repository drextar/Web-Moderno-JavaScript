const nums = [1, 2, 3, 4, 5]

// For com propósito
// nesse caso o propósito é dobrar os valores dos indices do array
let resultado = nums.map(function(e){ //MAP não modifica o array original, apenas cria um novo array com base no original
    return e * 2
})

console.log(nums)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)