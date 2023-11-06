// Importa los módulos necesarios para configurar el servidor.  
    import express from "express"
    import morgan from "morgan"
    import authRoutes from "./routes/auth.routes.js"
    import cookieParser from "cookie-parser"
// Crea una instancia de la aplicación Express.
    const app = express()


// Configura los middlewares.

    // Middleware de registro para registrar las solicitudes en la consola.
        app.use(morgan('dev'))
    // Middleware para analizar datos en formato JSON en las solicitudes.
     app.use(express.json())

    app.use(cookieParser())

// Monta las rutas autenticadas bajo el prefijo "/api".
    app.use("/api",authRoutes)

// Define el puerto en el que se ejecutará el servidor.
export const port = 3000
// Exporta la instancia de la aplicación Express como módulo predeterminado.
export default app

