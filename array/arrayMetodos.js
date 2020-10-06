const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]
pilotos.pop() // massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array(lista)
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento no índice 0 do array(lista)
console.log(pilotos)

//splice pode adicionar e remover elementos 

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1)// massa quebrou novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice informado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)