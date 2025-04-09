const fs = require('fs')
const path = require('path')

const fakeUploadFile = path.join(__dirname, 'photo.png')

const ext = path.extname(fakeUploadFile)
const allowed = ['.png', '.jpg', '.jpeg']

if (!allowed.includes(ext)) {
    console.log('File not permited!')
    process.exit(1)
}

const { name } = path.parse(fakeUploadFile)
const timestamp = Date.now()
const newName = `${name}-${timestamp}${ext}`

const destinationFolder = path.join(__dirname, 'uploads')
if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder)
}

const destinationPath = path.join(destinationFolder, newName)

fs.copyFileSync(fakeUploadFile, destinationFolder)

console.log(`Upload simulator success: ${destinationPath}`)