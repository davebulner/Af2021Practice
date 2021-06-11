import express from 'express'
import connectDB from './db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import vehicleRoutes from './routes/vehicleRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/vehicle', vehicleRoutes)
app.use('/api/category', categoryRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on port ${PORT}`))