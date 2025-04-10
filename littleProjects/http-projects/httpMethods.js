const { rmSync } = require('fs')
const http = require('http')

const port = 8080

const users = [
    {id: 1, name: 'John Doe', email: 'john@mail.com'},
    {id: 2, name: 'Jane Doe', email: 'jane@mail.com'}
]

const server = http.createServer((req, res) => {
    const { url, method } = req

    //  GET ROUTE - list users
    if (url === '/users' && method === 'GET') {
        res.writeHead(200, { 'content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }
    // POST ROUTE - create new user
    else if (url === '/users' && method === 'POST') {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const newUser = JSON.parse(body)
            newUser.id = users.length + 1
            users.push(newUser)
            
            res.writeHead(201, { 'content-type': 'application/json' })
            res.end(JSON.stringify(newUser))
        })
    }
    // PUT ROUTE - update a user
    else if (url.startsWith('/users/') && method === 'PUT') {
        const id = parseInt(url.split('/')[2])
        const index = users.findIndex(user => user.id === id)

        if (index === -1) {
            res.writeHead(404, { 'content-type': 'text/plain' })
            return res.end('Users not found!')
        }

        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const updateData = JSON.parse(body)
            users[index] = { ...users[index], ...updateData }

            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(users[index]))
        })
    }
    // DELETE ROUTE - delete a user by id
    else if (url.startsWith('/users/') && method === 'DELETE') {
        const id = parseInt(url.split('/')[2])
        const index = users.findIndex(u => u.id === id)

        if (index !== -1) {
            const deleted = users.splice(index, 1)
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(deleted[0]))
        } else {
            res.writeHead(404, { 'content-type': 'text/plain' })
            res.end("User not found!")
        }
    }
    // DEFAULT ROUTE
    else {
        res.writeHead(404, {'content-type': 'text/plain' })
        res.end("Route not found!")
    }
})

server.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})