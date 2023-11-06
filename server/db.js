// Importa el módulo 'mongoose' para trabajar con MongoDB.
import mongoose from "mongoose"

// Define una función asincrónica para conectar a la base de datos.
export const connectDB = async () => {
    try {
        // Intenta conectar a la base de datos MongoDB en la URL especificada.
        await mongoose.connect('mongodb://127.0.0.1/firstCrud')

        // Si la conexión es exitosa, muestra un mensaje en la consola.
        console.log('MongoDB connected')
    } catch (err) {
        // Si hay un error durante la conexión, muestra el error en la consola.
        console.error(err)
    }
}
