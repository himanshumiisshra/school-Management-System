const bcrypt = require('bcryptjs')

//hash password 

exports.hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    return hash;
}

exports.isPasswordMatched = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}