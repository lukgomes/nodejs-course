const fs = require('fs')
const path = require('path')

const logFile = path.join(__dirname, 'log.txt')

function registrarEvento(evento) {
    const timestamp = new Date().toISOString()
    const linha = `[${timestamp}] ${evento}\n`

    fs.appendFile(logFile, linha, err => {
        if (err) {
            console.error('Fail to register log: ', err)
        } else {
            console.log('Write event success: ', evento)
        }
    })
}

const evento = process.argv[2] || 'Excecução generica'
registrarEvento(evento)
