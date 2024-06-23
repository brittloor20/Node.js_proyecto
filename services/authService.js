const jwt = require("jsonwebtoken");


const JWT_SECRET =
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  
  function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
  return token
}

module.exports= {
    generateToken
}