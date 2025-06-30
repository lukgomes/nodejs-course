const mongoose = require('mongoose')


const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.7rmlga2.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=cursonodejs`)
        console.log("Conexão ao banco de dados realizado com sucesso")
    } catch (error) {
        console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error)
    }
}

module.exports = connectToDatabase