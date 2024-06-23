const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  return new Promise((resolve, reject) => {
    const token = req.headers.authorization;

    if (!token) {
      reject({
        status: 401,
        message: "Token de autenticacion no proporcionado",
      });
    }

    jwt.verify(
      token.split(" ")[1],
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      (error, decodedToken) => {
        if (error) {
          reject({ status: 401, message: "Token de autenticacion no valido" });
        } else {
          req.userId = decodedToken.userId; 
          resolve();
        }
      }
    );
  })
    .then(() => next()) 
    .catch((error) =>
      res.status(error.status || 500).json({ message: error.message })
    );
}

module.exports = verifyToken;