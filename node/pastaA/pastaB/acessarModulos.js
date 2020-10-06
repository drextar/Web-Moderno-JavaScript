const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC') //caso o arquivo q queira importar se chame 'index' ele importa automaticamente 
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)