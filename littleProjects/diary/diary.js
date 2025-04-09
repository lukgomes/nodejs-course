const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'diario.txt')
const entrada = process.argv[2]

if (!entrada) {
    console.log('Enter something to add a diary.')
    process.exit()
}

const dataHora = new Date().toLocaleString()
const registro = `[${dataHora}] ${entrada}\n`

fs.appendFile(filePath, registro, err => {
    if (err) {
        console.log('Error to write on diary: ', err)
    } else {
        console.log('Registred information o diary!')
    }
})
