const Person = require ('./person')

require("./modules/path")
require('./modules/http')

const person = new Person('Lucas')


console.log(person.sayMyName())
