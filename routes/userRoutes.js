const express = require("express")
const router = express.Router()

const userController= require("../controllers/userController")

// Definir las rutas para el CRUD de usuarios.

router.get("/",userController.getAllUsers) // Obtener todos los usuarios
router.post("/",userController.createUser) // Crear un usuario
router.put("/:id", userController.updatedUser) // Actualizar un usuario
router.delete("/:id", userController.deleteUser) // Eliminar un usuario


module.exports= router