const fs = require('fs')



const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //le o arquivo json e já converte para objeto (carregar BD por exemplo)
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => { //   __ constante que representa o diretório atual   //ler todos os arquivos daquele diretorio
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})