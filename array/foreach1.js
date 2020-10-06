const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//metodo 1
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//metodo 2
aprovados.forEach(nome => console.log(nome))

//metodo 3
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)