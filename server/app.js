import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use("/api",authRoutes)

export const port = 3000
export default app

