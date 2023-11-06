// Importa el módulo 'Router' de Express para crear rutas.
import { Router } from "express"
// Importa las funciones 'login' y 'register' desde el controlador de autenticación.
import { login, register, logout, profile } from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateTokens.js"
// Crea una instancia de un enrutador Express.
const router = Router()

// Define las rutas y sus controladores asociados.

// Ruta para registrar un nuevo usuario.
router.post('/register', register)

// Ruta para iniciar sesión (login) de un usuario.
router.post('/login', login)

// Ruta para cerrar sesion
router.post('/login', logout)

router.get('/profile',authRequired, profile)


// Exporta el enrutador para su uso en la aplicación principal o en otros archivos.
export default router