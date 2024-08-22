const  jwt = require('jsonwebtoken')
const generateToken = (id) => {
    return jwt.sign({id}, 'anykey', {expiresIn: '5m'})
}

module.exports = generateToken;