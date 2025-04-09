const fs = require('fs')
const path = require('path')

const folder = path.join(__dirname, 'docs')

const files = fs.readdirSync(folder)

files.forEach(file => {
    const ext = path.extname(file)

    if (ext === '.txt') {
        const fullPath = path.join(folder, file)
        const content = fs.readFileSync(fullPath, 'utf8')

        console.log('File: ', path.basename(file))
        console.log('Folder: ', path.dirname(fullPath))
        console.log('Content:\n', content)
        console.log('----------------------------------------\n')
    }
})