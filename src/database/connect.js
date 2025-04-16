const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const connectToDatabase = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.yngvepj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, (error) => {
        if (error) {
            console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error)
        }

        return console.log("connexão ao banco de dados realizada com sucesso!")
    })
}

module.exports = connectToDatabase