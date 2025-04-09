class Person {
    constructor(name) {
        this.name = name
    }

    sayMyName() {
        return `Hello there! \nMy name is ${this.name}!`
    }

}

// module.exports = Person
// para importar aqui, utilizar a sintaxe const Person = require('./person')

// utilizar o proximo caso precise exportar mais de uma classe ou objeto
module.exports = {
    Person,
}
// para importar esse aqui, utilizar const { Person } = require('./person')