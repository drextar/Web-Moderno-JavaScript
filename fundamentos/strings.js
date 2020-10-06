const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!") //correto também

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //substitui todos os literais pelo caractere 'e' 
console.log(escola.replace(/\w/g, 'e')) //substitui todos os caracteres por 'e'

console.log('Ana, Maria, Pedro'.split(',')) //separa em arrays