const http = require('http')
const app = require('./app/app')


const PORT = process.env.PORT || 2024
// console.log(app)

//servers
const server = http.createServer(app)
server.listen(PORT, console.log(`SERVER is running ${PORT}..............`))