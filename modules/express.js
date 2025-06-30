const express = require('express')

const app = express()
const port = 8080

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Hello there</h1>')
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'john doe',
            email: 'john@mail.com'
        }, 
        {
            name: 'jane doe',
            email: 'jane@mail.com'
        }
    ]

    res.status(200).json(users)
})

app.listen(port, () => console.log(`Running with express in port ${port}!`))