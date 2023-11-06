// Importa el módulo 'mongoose' para definir el modelo y conectarse a la base de datos.
import mongoose from "mongoose"

// Define el esquema de datos del usuario.
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // El campo 'name' es obligatorio.
        trim: true // Se eliminan espacios en blanco al principio y al final.
    },
    email: {
        type: String,
        required: true, // El campo 'email' es obligatorio.
        trim: true, // Se eliminan espacios en blanco al principio y al final.
        unique: true // El campo 'email' debe ser único en la colección.
    },
    password: {
        type: String,
        required: true, // El campo 'password' es obligatorio.
        trim: true // Se eliminan espacios en blanco al principio y al final.
    }
},
{
    timestamps: true // Se incluyen marcas de tiempo (createdAt y updatedAt) en los documentos.
});

// Crea un modelo de datos 'User' a partir del esquema definido.
const User = mongoose.model('user', userSchema)

// Exporta el modelo 'User' para que pueda ser utilizado en otras partes de la aplicación.
export default User
