// funcao para transformar array em outro array, com parametro incremental e o resultadio é passado para a próxima interação
// reduce recebe do array <---> resultado para para proxima interação <---> resultado para proxima interação

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){ 
    console.log(acumulador,'+', atual)
    return acumulador + atual
}, 0)

console.log(resultado)