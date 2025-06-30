const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'notas.txt')
const nota = process.argv[2]

if (!nota) {
    console.log('You need to enter a note.')
    process.exit()
}

fs.appendFile(filePath, nota + '\n', err => {
    if (err) {
        console.log('Error to save note: ', err)
    } else {
        console.log('Note save success!')
    }
})
