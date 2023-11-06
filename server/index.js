// Importa la instancia de la aplicación Express (app) y la constante 'port' desde los archivos correspondientes.
import app, { port } from './app.js'
import { connectDB } from './db.js'

// Llama a la función 'connectDB' para establecer la conexión con la base de datos MongoDB.
connectDB()

// Inicia el servidor Express y lo hace escuchar en el puerto especificado.
app.listen(port)

// Muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado.
console.log('Server listening on port: ' + port)
