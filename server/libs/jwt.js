import jwt from 'jsonwebtoken'

// Importa la clave secreta del token desde el archivo de configuración.
import { TOKEN_SECRET } from '../config.js'

// Función para crear un token de acceso JWT.
export function createAccessToken(payload) {
    return new Promise((res, rej) => {
        jwt.sign(
            payload, // La información que se incluirá en el token.
            TOKEN_SECRET, // La clave secreta utilizada para firmar el token.
            { expiresIn: "1d" }, // Opciones del token, en este caso, expira en 1 día.
            (error, token) => {
                if (error) {
                    rej(error) // Si hay un error, rechaza la promesa con el error.
                } else {
                    res(token) // Si se crea el token con éxito, resuelve la promesa con el token.
                }
            }
        )
    })
}
