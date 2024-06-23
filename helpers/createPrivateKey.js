const crypto = require ('crypto')

const secret = crypto.randomBytes(32).toString('hex')

console.log(secret) //e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
