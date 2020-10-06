//par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico
    return saudacao
}

//const saudacao = "Epa!"   //entraria no mesmo contexto léxico 1 e daria erro

// Objetos sao grupos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        longradouro: 'Rua Bacana',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)