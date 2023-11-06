// Importa el modelo de usuario desde el archivo correspondiente.
import User from '../models/user.model.js'

// Importa el módulo 'bcryptjs' para el hash de contraseñas.
import bycypt from 'bcryptjs'

// Importa la función 'createAccessToken' desde el archivo 'jwt.js' para la generación de tokens JWT.
import { createAccessToken } from '../libs/jwt.js'

// Controlador para el registro de usuarios.
export const register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        // Genera un hash de la contraseña antes de almacenarla en la base de datos.
        const passwordHash = await bycypt.hash(password, 10)

        // Crea una nueva instancia de usuario con los datos proporcionados.
        const newUser = new User({
            name,
            email,
            password: passwordHash
        })

        // Guarda el nuevo usuario en la base de datos.
        const userSaved = await newUser.save()

        // Genera un token de acceso JWT para el usuario registrado con el id.
        const token = await createAccessToken({ id: userSaved._id })

        // Guarda el token en una cookie en la respuesta HTTP.
        res.cookie('token', token)

        // Devuelve una respuesta JSON con información sobre el usuario registrado.
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            email: userSaved.email
        })
    } catch (error) {
        // Si ocurre un error, devuelve una respuesta de error con el mensaje.
        res.status(500).json({ message: error.message })
    }
}
// Controlador para el Login de usuarios.
export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        // Busca un usuario en la base de datos con el email
        const userFound = await User.findOne({email})
        // Si no se encuentra pasa lo siguiente
        if (!userFound) return res.status(400).json({message: "User not found"})
        
        // Compara el hash de la contraseña almacenada en la base de datos.
        const isMatch = await bycypt.compare(password, userFound.password)
        // Si la contraseña es incorrecta pasa lo siguiente
        if (!isMatch) return res.status(400).json({message: "Incorrect Password"})
        // en caso de que la contraseña se correcta crea un token con el id del usuario encontrado
        const token = await createAccessToken({ id: userFound._id })

        // Guarda el token en una cookie en la respuesta HTTP.
        res.cookie('token', token)

        // Devuelve una respuesta JSON con información sobre el usuario registrado.
        res.json({
            id: userFound._id,
            email: userFound.email
        })
    } catch (error) {
        // Si ocurre un error, devuelve una respuesta de error con el mensaje.
        res.status(500).json({ message: error.message })
    }
}
// Controlador para el logout de usuarios

export const logout = (req,res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = (req, res) => {
    res.send(req.user)
}